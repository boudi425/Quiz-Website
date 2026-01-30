import { useLocation, useNavigate } from "react-router-dom";
import  ProgressCircle from "../components/scoreCircle.tsx";
import Header from "../components/HeaderLast.tsx";
import SettingsMenu from "../components/settingsMenu.tsx";
import AnswersLog from "../components/answersReview.tsx"
import { useState, useEffect } from "react";
// navigate("/end", { state: { answers: allAnswers, userAnswers: currentQuestions } });

export default function Result() {
    const location = useLocation();
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const [isOpenSettings, setIsOpenSettings] = useState(false);
    const [isOpenAnswers, setIsOpenAnswers] = useState(false);
    const [isValid, setIsValid] = useState(false);
    
    useEffect(() => {
        if (!location?.state?.answers || !location.state?.userAnswers) {
            navigate("/home", { replace: true });
            return;
        }
        setIsValid(true);
        document.title = "Quiz Website | Result"
    }, [location.state, navigate]);
    
    // Calculate score only when data is valid
    let score = 0;
    if (isValid && location.state?.answers && location.state?.userAnswers) {
        location.state.answers.forEach((ans: string, index: number) => {
            if (ans === location.state?.userAnswers[index + 1]) {
                score++;
            }
        });
    }
    
    function RestartQuiz() {
        navigate("/quiz", { state: { quizSubjects: userData.selectedSubject, subjectsNames: location.state?.subjectsNames } });
    }
    function goBack() {
        navigate("/home")
    }
    
    // Don't render content if data is invalid (redirect is in progress)
    if (!isValid) {
        return null;
    }
    
    return (
        <main>
            <Header For="End" handleClick={() => setIsOpenSettings(!isOpenSettings)}/>
            <div className="container min-h-screen">
                <section className="flex justify-center flex-col mx-auto px-4 py-10 md:px-24">
                    <ProgressCircle value={score} max={location.state?.answers.length} />
                    <h2 className="text-on-surface-variant dark:text-dark-on-surface-variant text-2xl font-semibold text-center mt-6">You scored {score} out of {location.state?.answers.length}</h2>

                    <div className="flex items-center justify-center flex-col gap-4 mt-10">
                        <button onClick={RestartQuiz} className="btn-primary cursor-pointer">Restart Quiz!</button>
                        <button onClick={() => setIsOpenAnswers(true)} className="btn-secondary-2 cursor-pointer">Show Answers</button>
                        <button onClick={goBack} className="btn-secondary cursor-pointer">Go Home</button>
                    </div>
                    <SettingsMenu isOpen={isOpenSettings} handleCancel={() => setIsOpenSettings(false)} handleSave={() => setIsOpenSettings(false)}/>
                    <AnswersLog 
                        isOpen={isOpenAnswers} 
                        Questions={location.state?.Questions}
                        TrueAnswers={location.state?.answers} 
                        UserAnswers={location.state?.userAnswers} 
                        onCancel={() => setIsOpenAnswers(false)}
                    />
                </section>
            </div>
            <footer className="text-center text-sm text-on-surface-variant dark:text-dark-on-surface-variant py-3">&copy; 2025 Boudi For Tech</footer>
        </main>
    )
}
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/HeaderLast";
import ConfirmMessage from "../components/confirmMessage.tsx";
import { QuizRegistry as QuizBank } from "../data/index.ts";
import type { SubjectData, Question as QuestionType } from "../data/index.ts";
import { QuestionText } from "../components/MathInline.tsx";
type userAnswersType = {
    [key: number]: string;
}
function shuffle<T>(array: T[]): T[] {
    const arr = [...array]; // copy to avoid mutating original
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function generateQuiz(subjects: SubjectData[], max: number) {
    const result: QuestionType[] = [];

    for (let j = 0; j < subjects.length; j++) {
        const pool = QuizBank[Object.keys(QuizBank)[j]].Easy;

        for (let i = 0; i < max; i++) {
            result.push(pool[i]);
        }
    }

    shuffle(result);
    return result;
}
const userAnswers: userAnswersType = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: "",
        17: "",
        18: "",
        19: "",
        20: ""
};
export default function Play() {
    const location = useLocation();
    const navigate = useNavigate();
    if (!location.state || !location.state.quizSubjects) {
        navigate("/");
    }
    const questionMaxTarget = Math.floor(20 / location.state.quizSubjects.length);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [confirmSubmit, setConfirmSubmit] = useState(false);
    const [currentQuestions, setCurrentQuestions] = useState<userAnswersType>(userAnswers);
    const [questions] = useState<QuestionType[]>(() => {
        return generateQuiz(
            location.state.quizSubjects,
            questionMaxTarget
        );
    });
    
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    const [toggleHint, setToggleHint] = useState(false);
    
    const allAnswers = questions.map(q => q.answer);
    function handleButtonClick(option: string, index: number) {
        setCurrentQuestions(prev => ({
            ...prev,
            [index + 1]: option
        }));
        localStorage.setItem("userAnswers", JSON.stringify(currentQuestions));
    }
    function submitQuiz() {
        console.log("Submitting quiz...");
        // Add submission logic here
        if (!allAnswers) {
            throw new Error("No answers available for submission.");
        } else {
            navigate("/end", { state: { answers: allAnswers, userAnswers: currentQuestions } });
        }
    }
    function closeWindow() {
        console.log("Closing confirmation window...");
        setConfirmSubmit(false);
    }
    return (
        <main>
            <Header For="Play"/>
            <div className="container min-h-screen">
                <section className="flex justify-center flex-col mx-auto px-4 py-10 md:px-24">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-semibold">Question {questionIndex+1} of 20</p>
                        <span onClick={() => setToggleHint(prev => !prev)} className="cursor-pointer relative flex items-center justify-center rounded-full w-9 h-9 text-xl font-semibold bg-tertiary text-on-tertiary hover:scale-105 hover:shadow-md transition-all">
                            ?
                            <p className={`${toggleHint ? "scale-100" : "scale-0"} flex z-10 bg-tertiary-container text-on-tertiary-container w-50 h-fit items-center absolute right-full p-2 rounded-md mr-2 text-sm shadow-lg transform transition-all origin-right`}>
                                {questions[questionIndex].hint}
                            </p>
                        </span>
                    </div>
                    <div className="flex items-center gap-2 mt-6 mb-6">
                        <span className="flex items-center justify-center rounded-full w-10 h-10 text-xl font-semibold bg-primary text-on-primary">{questionIndex+1}</span>
                        <QuestionText text={questions[questionIndex].question} />
                    </div>
                    <div className="mb-6">
                        <p>Choose From the Following the correct answer:</p>
                        <div>
                            {questions[questionIndex].options.map((option, idx) => {
                                const isSelected = option === currentQuestions[questionIndex +1];
                                return (<button onClick={() => handleButtonClick(option, questionIndex)} key={idx} className={`flex items-center bg-background border border-primary text-on-background py-3 pl-3 pr-4 gap-2.5 w-full text-2xl font-semibold font-sans mt-3 rounded-sm group cursor-pointer hover:bg-primary hover:text-on-primary transition-all ${isSelected ? 'bg-primary text-on-primary' : ''} `}>
                                    <span className={`rounded-full w-10 h-10 flex items-center justify-center  group-hover:bg-background group-hover:text-primary transition-all ${isSelected ? 'bg-background text-primary' : 'bg-on-background text-background'}`}>
                                        {String.fromCharCode(65 + idx)}
                                    </span>
                                    <QuestionText text={option} />
                                </button>)
                            })}
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 w-full mt-6">
                        <button className="flex items-center justify-center cursor-pointer btn-secondary" onClick={() => questionIndex > 0 ? setQuestionIndex(questionIndex-1) : ""}>
                            <svg className="text-on-surface-variant" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Prev
                        </button>
                        <button className="flex items-center justify-center cursor-pointer btn-primary-2" onClick={() => questionIndex < questions.length - 1 ? setQuestionIndex(questionIndex+1) : ""}>
                            Next
                            <svg className="text-on-primary" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        {questionIndex === questions.length - 1 && <button className="flex items-center justify-center cursor-pointer mt-4 btn-primary-2" onClick={() => setConfirmSubmit(true)}>
                            Submit Quiz!
                        </button>}
                        {questionIndex === questions.length - 1 && <p className="text-sm font-sans text-on-surface-variant mt-2">Make sure to review your answers before submitting.</p>}
                    </div>
                    <ConfirmMessage Shown={confirmSubmit} onConfirm={submitQuiz} onCancel={closeWindow}/>
                    
                </section>
            </div>
            <footer className="text-center text-sm text-on-surface-variant py-3">&copy; 2025 Boudi For Tech</footer>
        </main>
    )
}
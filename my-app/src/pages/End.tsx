import { useLocation } from "react-router-dom";
import  ProgressCircle from "../components/scoreCircle.tsx";
import Header from "../components/HeaderLast.tsx";
import SettingsMenu from "../components/settingsMenu.tsx";
import { useState } from "react";
// navigate("/end", { state: { answers: allAnswers, userAnswers: currentQuestions } });

export default function End() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    let score = 0;
    location.state?.answers.forEach((ans: string, index: number) => {
        if (ans === location.state?.userAnswers[index + 1]) {
            score++;
        }
    });
    return (
        <main>
            <Header For="End" handleClick={() => setIsOpen(!isOpen)}/>
            <div className="container min-h-screen">
                <section className="flex justify-center flex-col mx-auto px-4 py-10 md:px-24">
                    <ProgressCircle value={score} max={location.state?.answers.length} />
                    <h2 className="text-on-surface-variant text-2xl font-semibold text-center mt-6">You scored {score} out of {location.state?.answers.length}</h2>

                    <div className="flex items-center justify-center flex-col gap-4 mt-10">
                        <button className="btn-primary">Restart Quiz!</button>
                        <button className="btn-secondary-2">Show Answers</button>
                        <button className="btn-secondary">Go Back</button>
                    </div>
                    <SettingsMenu isOpen={isOpen}/>
                </section>
            </div>
            <footer className="text-center text-sm text-on-surface-variant py-3">&copy; 2025 Boudi For Tech</footer>
        </main>
    )
}
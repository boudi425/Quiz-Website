import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/HeaderLast";
import ConfirmMessage from "../components/confirmMessage.tsx";
import { QuizRegistry as QuizBank } from "../data/index";
import type { Question as QuestionType, SubjectKey } from "../data/index";
import { QuestionText } from "../components/MathInline.tsx";

type UserAnswersType = { [key: number]: string };

function shuffle<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/** Normalize UI name (e.g. "Linear Algebra") to registry key (e.g. "linearalgebra"). */
function toRegistryKey(name: string): string {
    return name.replace(/\s/g, "").toLowerCase();
}

async function generateQuiz(
    subjectsNames: string[],
    maxPerSubject: number
): Promise<QuestionType[]> {
    const result: QuestionType[] = [];
    const data = JSON.parse(localStorage.getItem("userData") || "{}");
    const difficulty = (data.selected || "Easy") as "Easy" | "Medium" | "Hard";

    for (let j = 0; j < subjectsNames.length; j++) {
        const key = toRegistryKey(subjectsNames[j]) as SubjectKey;
        if (!(key in QuizBank)) {
            console.warn(`Subject "${subjectsNames[j]}" not in QuizRegistry, skipping.`);
            continue;
        }

        const loader = QuizBank[key];
        const subjectData = await loader();
        const pool = subjectData[difficulty];
        if (!pool?.length) continue;

        const toTake = Math.min(maxPerSubject, pool.length);
        for (let i = 0; i < toTake; i++) result.push(pool[i]);
    }

    return shuffle(result);
}
const initialUserAnswers: UserAnswersType = {
    1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: "",
    11: "", 12: "", 13: "", 14: "", 15: "", 16: "", 17: "", 18: "", 19: "", 20: ""
};

type QuizLocationState = { quizSubjects: string[]; subjectsNames: string[] };

export default function Quiz() {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as QuizLocationState | null;

    const [questionIndex, setQuestionIndex] = useState(0);
    const [confirmSubmit, setConfirmSubmit] = useState(false);
    const [currentQuestions, setCurrentQuestions] = useState<UserAnswersType>(initialUserAnswers);
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [loading, setLoading] = useState(true);
    const [toggleHint, setToggleHint] = useState(false);

    useEffect(() => {
        if (!state?.quizSubjects?.length || !state?.subjectsNames?.length) {
            navigate("/", { replace: true });
            return;
        }
        document.title = "Quiz Website | Quiz";
        const n = state.subjectsNames.length;
        const maxPerSubject = Math.floor(20 / n);
        generateQuiz(state.subjectsNames, maxPerSubject)
            .then(setQuestions)
            .catch((e) => {
                console.error("Failed to load quiz:", e);
                navigate("/", { replace: true });
            })
            .finally(() => setLoading(false));
    }, [navigate, state?.quizSubjects, state?.subjectsNames]);

    useEffect(() => {
        localStorage.setItem("userAnswers", JSON.stringify(currentQuestions));
    }, [currentQuestions]);

    const allAnswers = questions.map((q) => q.answer);

    function handleButtonClick(option: string, qIndex: number) {
        setCurrentQuestions((prev) => ({
            ...prev,
            [qIndex + 1]: option,
        }));
    }

    function submitQuiz() {
        if (!questions.length) return;
        navigate("/result", {
            state: { answers: allAnswers, userAnswers: currentQuestions, Questions: questions, subjectsNames: state?.subjectsNames },
        });
    }
    function closeWindow() {
        setConfirmSubmit(false);
    }

    if (!state?.quizSubjects?.length) {
        return null;
    }

    if (loading || !questions.length) {
        return (
            <main>
                <Header For="Play" />
                <div className="container min-h-screen flex items-center justify-center gap-4">
                    <div className="w-8 h-8 rounded-full border-4 border-on-surface-variant/30 dark:border-dark-on-surface-variant/30 border-t-on-surface-variant dark:border-t-dark-on-surface-variant animate-spin" />
                    <p className="text-xl text-on-surface-variant dark:text-dark-on-surface-variant">Loading quiz…</p>
                </div>
                <footer className="text-center text-sm text-on-surface-variant dark:text-dark-on-surface-variant py-3">&copy; 2025 Boudi For Tech</footer>
            </main>
        );
    }

    const current = questions[questionIndex];
    if (!current) return null;

    return (
        <main>
            <Header For="Play"/>
            <div className="container min-h-screen">
                <section className="flex justify-center flex-col mx-auto px-4 py-20 md:px-24">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-semibold">Question {questionIndex + 1} of {questions.length}</p>
                        <span onClick={() => setToggleHint((prev) => !prev)} className="cursor-pointer relative flex items-center justify-center rounded-full w-9 h-9 text-xl font-semibold bg-tertiary text-on-tertiary dark:bg-dark-tertiary dark:text-dark-on-tertiary hover:scale-105 hover:shadow-md transition-all">
                            ?
                            <div className={`${toggleHint ? "scale-100" : "scale-0"} flex z-10 bg-tertiary-container text-on-tertiary-container dark:bg-dark-tertiary-container dark:text-dark-on-tertiary-container w-50 h-fit items-center absolute right-full p-2 rounded-md mr-2 text-sm shadow-lg transform transition-all origin-right`}>
                                <QuestionText text={current.hint || "No hint available for this question."} />
                            </div>
                        </span>
                    </div>
                    <div className="flex items-center gap-2 mt-6 mb-6">
                        <span className="flex items-center justify-center rounded-full w-10 h-10 text-xl font-semibold bg-primary text-on-primary dark:bg-dark-primary dark:text-dark-on-primary">{questionIndex + 1}</span>
                        <QuestionText text={current.question} />
                    </div>
                    <div className="mb-6">
                        <p>Choose From the Following the correct answer:</p>
                        <div>
                            {current.options.map((option, idx) => {
                                const isSelected = option === currentQuestions[questionIndex + 1];
                                return (
                                    <button
                                        onClick={() => handleButtonClick(option, questionIndex)}
                                        key={idx}
                                        className={`flex items-center bg-background dark:bg-dark-background border border-primary dark:border-dark-primary text-on-background dark:text-dark-on-background py-3 pl-3 pr-4 gap-2.5 w-full text-2xl font-semibold font-sans mt-3 rounded-sm group cursor-pointer hover:bg-primary hover:text-on-primary dark:hover:bg-dark-primary dark:hover:text-dark-on-primary transition-all ${isSelected ? "bg-primary text-on-primary dark:bg-dark-primary dark:text-dark-on-primary" : ""}`}
                                    >
                                        <span className={`rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-background group-hover:text-primary dark:group-hover:bg-dark-background dark:group-hover:text-dark-primary transition-all ${isSelected ? "bg-background text-primary dark:bg-dark-on-primary dark:text-dark-primary" : "bg-on-background text-background dark:bg-dark-on-background dark:text-dark-background"}`}>
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        <QuestionText text={option} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 w-full mt-6">
                        <button className="flex items-center justify-center cursor-pointer btn-secondary" onClick={() => questionIndex > 0 && setQuestionIndex(questionIndex - 1)}>
                            <svg className="text-on-surface-variant dark:text-dark-on-surface-variant" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Prev
                        </button>
                        <button className="flex items-center justify-center cursor-pointer btn-primary-2" onClick={() => questionIndex < questions.length - 1 && setQuestionIndex(questionIndex + 1)}>
                            Next
                            <svg className="text-on-primary dark:text-dark-on-primary" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        {questionIndex === questions.length - 1 && <button className="flex items-center justify-center cursor-pointer mt-4 btn-primary-2" onClick={() => setConfirmSubmit(true)}>
                            Submit Quiz!
                        </button>}
                        {questionIndex === questions.length - 1 && <p className="text-sm font-sans text-on-surface-variant dark:text-dark-on-surface-variant mt-2">Make sure to review your answers before submitting.</p>}
                    </div>
                    <ConfirmMessage Shown={confirmSubmit} onConfirm={submitQuiz} onCancel={closeWindow}/>
                    
                </section>
            </div>
            <footer className="text-center text-sm text-on-surface-variant dark:text-dark-on-surface-variant py-3">&copy; 2025 Boudi For Tech</footer>
        </main>
    )
}
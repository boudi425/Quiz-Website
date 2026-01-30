import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/HeaderFirst";
import { useState, useEffect } from "react";
import { scienceData as Data } from "../data/ScienceFieldsData.ts";
import SettingsMenu from "../components/settingsMenu.tsx";
interface UserData {
    userName: string;
    selectedSubject: string[];
    selected: string | null;
}
export default function Home() {
    const navigate = useNavigate();
    const realData = JSON.parse(localStorage.getItem("userData") || "{}") as UserData;
    const [buttonsContent, setButtonsContent] = useState<string[]>(realData.selectedSubject);
    const [selectedFields, setSelectedFields] = useState<string[]>([]);
    const [isOpenSettings, setIsOpenSettings] = useState(false)
    useEffect(() => {
        document.title = "Quiz Website | Home";
    }, []);
    if (Object.keys(realData).length === 0) {
        return <Navigate to="/" replace />;
    }
    const toggle = (value: string) => {
        setSelectedFields((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    }
    function handleButtonClick(subject: string) {
        if (!Data[subject]) {
            toggle(subject);
            return;
        }
        setButtonsContent(Data[subject].variants);
    }
    function resetData() {
        setButtonsContent(realData.selectedSubject);
        setSelectedFields([]);
    }
    function startQuiz(data: string[]) {
        navigate("/quiz", { state: { quizSubjects: data, subjectsNames: data } });
    }
    return (
        <main>
            <Header For="Profile" Action={() => resetData()} handleClick={() => setIsOpenSettings(!isOpenSettings)}/>
            <div className="container min-h-screen">
                <section className="flex justify-center flex-col mx-auto px-4 py-8 md:px-24">
                    <h1 className="text-center font-bold text-5xl text-on-surface-variant dark:text-dark-on-surface-variant">Hello, {realData.userName}</h1>
                    <p className="text-center font-semiBold text-2xl text-on-surface-variant dark:text-dark-on-surface-variant mt-2">Choose a category you wish to have a quiz on and Start!</p>
                    <div className="flex flex-col items-center justify-center mt-4">
                        {buttonsContent.map((subject, idx) => {
                            const isSelected = selectedFields.includes(subject);
                            return (
                                <button key={subject} onClick={() => handleButtonClick(subject)} className={`bg-background dark:bg-dark-background border border-primary dark:border-dark-primary text-on-background dark:text-dark-on-background py-3 pl-3 pr-4 gap-2.5 w-full text-2xl font-semibold font-sans mt-3 rounded-sm flex items-center group cursor-pointer ${isSelected ? "bg-primary text-on-primary dark:bg-dark-primary dark:text-dark-on-primary" : ""} hover:bg-primary hover:text-on-primary dark:hover:bg-dark-primary dark:hover:text-dark-on-primary transition-all`}>
                                    <span className={`rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-background group-hover:text-primary dark:group-hover:bg-dark-background dark:group-hover:text-dark-primary transition-all ${isSelected ? "bg-background/90 text-primary dark:bg-dark-on-primary dark:text-dark-primary" : "bg-on-background text-background dark:bg-dark-on-background dark:text-dark-background"}`}>
                                        {isSelected ? "✓" : String.fromCharCode(65 + idx)}
                                    </span>
                                    {subject}
                                </button>
                            );
                        })}
                        <button className="btn-primary mt-4 w-50 disabled:bg-primary/5 hover:translate-y-[-2px] active:scale-95 transition-all duration-200 cursor-pointer" disabled={selectedFields.length === 0} onClick={() => startQuiz(selectedFields)}>Start Quiz!</button>
                        {selectedFields.length === 0 && <p className="mt-2 text-error dark:text-dark-error text-center text-bold">Please Select one Item or more!</p>}
                    </div>
                </section>
                <SettingsMenu isOpen={isOpenSettings} handleCancel={() => setIsOpenSettings(false)} handleSave={() => setIsOpenSettings(false)} />

            </div>
            <footer className="text-center text-sm text-on-surface-variant dark:text-dark-on-surface-variant py-3">&copy; 2025 Boudi For Tech</footer>
        </main>
    )
}
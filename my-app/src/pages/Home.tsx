import { Navigate, useNavigate, useLocation } from "react-router-dom"; 
import Header from "../components/HeaderFirst";
import { useState } from "react";
import {scienceData as Data} from "../data/ScienceFieldsData.ts";
import SettingsMenu from "../components/settingsMenu.tsx";
interface UserData {
  userName: string;
  selectedSubject: string[];
  selected: string | null;
}
//userName: string; selectedSubject: string[]; selected: string | null
export default function Home() {
    /*const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let id = 0;*/
    const location = useLocation();
    const navigate = useNavigate();
    const realData = JSON.parse(localStorage.getItem("userData") || "{}") as UserData;
    const [buttonsContent, setButtonsContent] = useState<string[]>(realData.selectedSubject);
    const [selectedFields, setSelectedFields] = useState<string[]>([]);
    if (Object.keys(realData).length === 0) {
        return <Navigate to="/" replace />;
    }
    const toggle = (value: string) => {
    console.log(selectedFields);
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
        console.log("Starting quiz with subjects:", data);
        navigate("/play", { state: { quizSubjects: data } });
    }
    console.log("Home Page Loaded");
    console.log(`The Data Give: ${location.state}`);
    return (
        <main>
            <Header For="Profile" Action={() => resetData()}/>
            <div className="container min-h-screen">
                <section className="flex justify-center flex-col mx-auto px-4 py-8 md:px-24">
                    <h1 className="text-center font-bold text-5xl text-on-surface-variant">Hello, {realData.userName}</h1>
                    <p className="text-center font-semiBold text-2xl text-on-surface-variant mt-2">Choose a category you wish to have a quiz on and Start!</p>
                    <div className="flex flex-col items-center justify-center mt-4">
                        {buttonsContent.map((subject) => {
                            const isSelected = selectedFields.includes(subject);
                            return (
                                <button key={subject} onClick={() => handleButtonClick(subject)} className={`bg-background border border-primary text-on-background py-3 pl-3 pr-4 gap-2.5 w-full text-2xl font-semibold font-sans mt-3 rounded-sm flex items-center group cursor-pointer ${isSelected ? "bg-primary text-on-primary" : ""} hover:bg-primary hover:text-on-primary transition-all`}>
                                    <span className={`rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-background group-hover:text-primary transition-all ${isSelected ? "bg-background text-primary" : "bg-on-background text-background "}`}>
                                        {isSelected ? "✓" : "X"}
                                    </span>
                                    {subject}
                                </button>
                            );
                        })}
                        <button className="btn-primary mt-4 w-50 disabled:bg-primary/5 transition-colors duration-200" disabled={selectedFields.length === 0} onClick={() => startQuiz(selectedFields)}>Start Quiz!</button>
                        {selectedFields.length === 0 && <p className="mt-2 text-error text-center text-bold">Please Select one Item or more!</p>}
                    </div>
                </section>
            </div>
            <footer className="text-center text-sm text-on-surface-variant py-3">&copy; 2025 Boudi For Tech</footer>
        </main>
    )
}
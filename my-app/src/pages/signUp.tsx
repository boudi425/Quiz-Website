//import { useNavigate, Link } from "react-router-dom";
import Header from "../components/HeaderFirst.tsx";
import { Combobox } from "@headlessui/react";
//import { Check } from "lucide-react";

import { useState } from "react";
const options = ["Easy", "Medium", "Hard"];
const subjects = ["Math", "Science", "History", "Literature", "Art", "Music", "Physical Education", "Computer Science"];
export default function App() {
    //const navigate = useNavigate();
    const [userName, setUserName] = useState<string>("");
    const [selected, setSelected] = useState<string | null>(options[0]);
    const [selectedSubject, setSelectedSubject] = useState<string[]>([]);
    const [query, setQuery] = useState("");

    const filteredOptions = query === "" ? options : options.filter((option) => option.toLowerCase().includes(query.toLowerCase()));
    const toggle = (value: string) => {
        console.log(selectedSubject);
        setSelectedSubject((prev) => 
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    }
    function submitForm(formData: { userName: string; selectedSubject: string[]; selected: string | null }) {
        if (formData.selectedSubject.length === 0) {
            throw new Error("Please select at least one subject.");
        }
        console.log(formData);
    }
    return ( 
        <main>
            <Header For="Sign" />
            <div className="container">
                <section className="flex justify-center flex-col mx-auto px-4 py-8 md:px-24">
                    <h1 className="text-center font-bold text-5xl text-on-surface-variant">Sign Up</h1>
                    <p className="text-center font-semiBold text-2xl text-on-surface-variant mt-2">Personalize your quizzes to match your goals</p>
                    <form onSubmit={(e) => { e.preventDefault(); submitForm({ userName, selectedSubject, selected }); }} className="bg-background rounded-lg flex flex-col mt-8 gap-4 px-4 py-6 drop-shadow-sm items-center">
                        <p className="text-on-background text-left">Username</p>
                        <input 
                            type="text" 
                            placeholder="e.g. Boudi" 
                            onChange={(e) => setUserName(e.target.value)} 
                            required
                            className="py-3 pl-3 w-full pr-4 text-lg rounded-lg border bg-secondary-container border-tertiary text-on-secondary-container h-14 shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:border-primary focus:shadow-inset-B" 
                        />
                        <p className="text-on-background text-left">Subjects</p>
                        <div className="flex flex-wrap">
                            {subjects.map((option) => {
                                const isSelected = selectedSubject.includes(option);
                                return (
                                    <button
                                        type="button"
                                        key={option}
                                        onClick={() => toggle(option)}
                                        className={`m-1 px-4 py-2 rounded-full border ${isSelected ? "bg-blue-500 text-white border-blue-500" : "bg-surface text-on-surface border-on-surface-variant"}`}
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                        <p className="text-on-background text-left">Difficulty</p>
                        <Combobox value={selected} onChange={setSelected}>
                            {({ open }) => (
                                <div className="relative w-full">
                                    <Combobox.Input 

                                        className="py-3 pl-3 pr-4 w-full text-lg rounded-lg border bg-secondary-container border-tertiary text-on-secondary-container h-14 shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:border-primary focus:shadow-inset-B" 
                                        onChange={(e) => setQuery(e.target.value)}
                                        displayValue={(value:string) => value}
                                        required
                                    />
                                    <Combobox.Button className={`absolute inset-y-0 right-3 flex items-center text-on-secondary-container transition-transform duration-300 ${open ? "rotate-90" : ""}`}>
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9L12 15L18 9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </Combobox.Button>
                                    <Combobox.Options className="absolute w-full z-10 mt-0.5 rounded-lg border bg-secondary-container text-on-secondary-container transition-all duration-300 ease-in-out shadow">
                                        {filteredOptions.map(selection => (
                                            <Combobox.Option
                                            key={selection}
                                            value={selection}
                                            className={({ active }) =>
                                                `cursor-pointer px-3 py-2 ${
                                                active ? "bg-primary text-on-primary" : ""
                                                }`
                                            }
                                            >
                                            {selection}
                                            </Combobox.Option>
                                        ))}
                                        </Combobox.Options>
                                    </div>
                            )}
                        </Combobox>
                        <button className="btn-primary" type="submit">Start Quiz!</button>
                    </form>
                </section>
            </div>
            <p className="text-center text-on-surface-variant text-sm">&copy; 2025 <span>Boudi For Tech</span></p>
        </main>
    )
}
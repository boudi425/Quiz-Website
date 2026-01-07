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
    return ( 
        <main>
            <Header For="Sign" />
            <div className="container">
                <section className="flex justify-center flex-col mx-auto px-4 py-8 md:px-24">
                    <h1 className="text-center font-bold text-5xl text-on-surface-variant">Sign Up</h1>
                    <p className="text-center font-semiBold text-2xl text-on-surface-variant mt-2">Personalize your quizzes to match your goals</p>
                    <form onSubmit={(e) => e.preventDefault()} className="bg-background rounded-lg flex flex-col mt-8 gap-4 px-4 py-6 drop-shadow-sm">
                        <p>Username</p>
                        <input type="text" placeholder="e.g. Boudi" onChange={(e) => setUserName(e.target.value)} />
                        <p>Subjects</p>
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
                        <p>Difficulty</p>
                        <Combobox value={selected} onChange={setSelected}>
                        <Combobox.Input 
                            onChange={(e) => setQuery(e.target.value)}
                            displayValue={(value:string) => value}
                        />
                        <Combobox.Options className="mt-1 rounded-lg border bg-white shadow">
                            {filteredOptions.map(selection => (
                                <Combobox.Option
                                key={selection}
                                value={selection}
                                className={({ active }) =>
                                    `cursor-pointer px-3 py-2 ${
                                    active ? "bg-blue-500 text-white" : ""
                                    }`
                                }
                                >
                                {selection}
                                </Combobox.Option>
                            ))}
                            </Combobox.Options>
                        </Combobox>
                        <button type="submit">Start Quiz!</button>
                    </form>
                </section>
            </div>
            <p className="text-center text-on-surface-variant text-sm">&copy; 2025 <span>Boudi For Tech</span></p>
        </main>
    )
}
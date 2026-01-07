//import { useNavigate, Link } from "react-router-dom";
import Header from "../components/HeaderFirst.tsx";
import { Combobox } from "@headlessui/react";
//import { Check } from "lucide-react";
import { useState } from "react";
const options = ["Easy", "Medium", "Hard"];
const subjects = ["Math", "Science", "History", "Literature"];
export default function App() {
    //const navigate = useNavigate();
    const [selected, setSelected] = useState<string | null>(options[0]);
    const [selectedSubject, setSelectedSubject] = useState<string[]>([]);
    const [query, setQuery] = useState("");

    const filteredOptions = query === "" ? options : options.filter((option) => option.toLowerCase().includes(query.toLowerCase()));
    const toggle = (value: string) => {
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
                    <form className="bg-background rounded-lg flex flex-col mt-8 gap-6 drop-shadow-sm">
                        <input type="text" placeholder="e.g. Boudi" />
                        <div>

                        </div>
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
                    </form>
                </section>
            </div>
            <p className="text-center text-on-surface-variant text-sm">&copy; 2025 <span>Boudi For Tech</span></p>
        </main>
    )
}
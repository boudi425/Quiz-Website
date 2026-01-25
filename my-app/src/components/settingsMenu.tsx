import { useRef, useState } from "react";

const options = ["Easy", "Medium", "Hard"];
const subjects = ["Physics", "Mathematics", "Biology", "Chemistry", "EarthScience", "ComputerScience"];
export default function SettingsMenu({isOpen}: {isOpen: boolean}) {
    const userData = JSON.parse(localStorage.getItem("userData") || '{}');
    const fileRef = useRef(null);
    const [selectedSubject, setSelectedSubject] = useState<string[]>([...userData.selectedSubject || '']);
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>(userData.selected || options[0]);
    const toggle = (value: string, For: "subject" | "difficulty") => {
        if (For === "subject") {
            console.log(selectedSubject);
            setSelectedSubject((prev) => 
                prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
            );
        } else if (For === "difficulty") {
            setSelectedDifficulty(value);
        }
    }
    return (
        <div className={`${isOpen ? 'flex' : 'hidden'} z-50 inset-0 bg-black/75 fixed flex items-center justify-center`}>
            <div className="bg-background rounded-lg p-6 w-90 shadow-lg">
                <h2 className="text-on-background text-xl font-semibold mb-4">Settings</h2>
                <div>
                    <label className="text-on-background font-medium mb-2 block">User Name:</label>
                    <input className="mb-2 py-3 pl-3 pr-4 w-60 h-12 text-lg rounded-lg border text-on-surface-variant border-outline shadow-sm focus:shadow-md focus:outline-none transition-all" type="text" value={userData.userName} />
                    <svg className="text-on-surface-variant" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="text-on-background font-medium mb-2">Profile Picture:</p>
                    <input type="file" accept="image/*" className="text-on-background font-medium mb-2" ref={fileRef}/>
                    <button className="bg-tertiary text-on-tertiary py-2 px-4 mb-2 rounded-lg hover:scale-105 hover:shadow-md transition-all cursor-pointer">Upload</button>
                    <p className="text-on-background font-medium mb-2">Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                        {subjects.map((option) => {
                                const isSelected = selectedSubject.includes(option);
                                    return (
                                        <button
                                            type="button"
                                            key={option}
                                            onClick={() => toggle(option, "subject")}
                                            className={`flex items-center px-4 py-2 border border-secondary text-on-background text-sm transition-all ease-in-out ${isSelected ? 'bg-primary text-on-primary rounded-2xl' : 'bg-transparent rounded-md'}`}
                                        >
                                            {isSelected && <svg className="mr-2 w-6 h-6" viewBox="0 0 1024 1024" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M439.2 680c9.6 8.8 25.6 8.8 35.2-0.8l300-309.6C784 360 784 344 773.6 334.4c-9.6-9.6-25.6-9.6-35.2 0.8L438.4 644.8l35.2-0.8-182.4-167.2c-10.4-9.6-25.6-8.8-35.2 1.6-9.6 10.4-8.8 25.6 1.6 35.2L439.2 680z" fill="" /><path d="M515.2 1007.2c-276 0-500-224-500-500S239.2 7.2 515.2 7.2s500 224 500 500-224 500-500 500z m0-952C265.6 55.2 63.2 257.6 63.2 507.2s202.4 452 452 452 452-202.4 452-452S764.8 55.2 515.2 55.2z" fill="" />
                                            </svg>}
                                            {option}
                                        </button>
                                    )
                        })}
                    </div>
                    <p className="text-on-background font-medium mb-2 mt-4">Difficulties:</p>
                    <div className="flex flex-wrap gap-2">
                        {options.map((difficulty) => {
                            const isSelected = selectedDifficulty === difficulty;
                                    return (
                                        <button
                                            type="button"
                                            key={difficulty}
                                            onClick={() => toggle(difficulty, "difficulty")}
                                            className={`flex items-center px-4 py-2 border border-secondary text-on-background text-sm transition-all ease-in-out ${isSelected ? "bg-primary text-on-primary rounded-2xl" : "rounded-md"}`}
                                        >
                                            {difficulty}
                                        </button>
                                    )
                        })}
                    </div>
                    <div className="flex items-center justify-end mt-6">
                        <button className="bg-primary text-on-primary px-4 py-2 rounded-md cursor-pointer hover:scale-105 hover:shadow-md transition-all">Save Changes</button>
                        <button className="ml-4 bg-secondary text-on-secondary px-4 py-2 rounded-md cursor-pointer hover:scale-105 hover:shadow-md transition-all">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
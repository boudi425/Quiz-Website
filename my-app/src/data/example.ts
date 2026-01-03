type QuizQuestion = {
    question: string;
    answer: string;
    choices: string[];
    hint: string;
}  


export const Math: QuizQuestion[] = [
    {
        question: "What is 2 + 2?",
        answer: "4",
        choices: [
            "4",
            "5",
            "3",
            "6"
        ],
        hint: "It's the sum of two and two."
    }
]
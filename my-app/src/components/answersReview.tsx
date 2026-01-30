import type { Question } from "../data/index.ts"
import {QuestionText as QuestionText} from "./MathInline.tsx"
export default function AnswersLog({isOpen, TrueAnswers, UserAnswers, Questions, onCancel}: {isOpen: boolean, TrueAnswers: string[], UserAnswers: string[], Questions: Question[], onCancel: () => void}) {
    return (
            <div className={`${isOpen ? 'flex' : 'hidden'} z-50 inset-0 bg-black/75 fixed flex items-center justify-center p-6`}>
                <div className="bg-background dark:bg-dark-background rounded-lg p-6 w-full shadow-lg flex  flex-col justify-center items-center">
                    <h2 className="text-on-background dark:text-dark-on-background text-xl font-semibold mb-4">Answers Review</h2>
                    <div className="max-h-120 overflow-y-auto mb-4 border p-4 rounded shadow-lg border-outline dark:border-dark-outline">
                        {Questions.map((question, index) => { 
                            const isTrue = TrueAnswers[index] === UserAnswers[index + 1];
                            return (
                                <div className="text-xl text-on-background dark:text-dark-on-background text-semibold flex items-center flex-col gap-2 mb-4" key={index}>
                                    <div className="flex items-center gap-4">
                                        <span className="bg-primary text-on-primary dark:bg-dark-primary dark:text-dark-on-primary p-4 rounded-full w-5 h-5 flex items-center justify-center">{index+1}</span>
                                        <QuestionText text={question.question} />
                                    </div>
                                    <div className="flex flex-col gap-2 mt-2 w-3/4">
                                        <div className="flex flex-col gap-2">
                                            <p>Correct Answer: </p>
                                            <div className="bg-correct text-on-correct dark:bg-dark-correct dark:text-dark-on-correct px-4 py-2 rounded-md flex items-center justify-between">
                                                <QuestionText text={TrueAnswers[index]} />
                                                <span>✓</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p>Your Answer: </p>
                                            <div className={`px-4 py-2 rounded-md flex items-center justify-between ${isTrue ? 'bg-correct text-on-correct dark:bg-dark-correct dark:text-dark-on-correct' : 'bg-error text-on-error dark:bg-dark-error dark:text-dark-on-error'}`}>
                                                <QuestionText text={UserAnswers[index + 1]} />
                                                <span>{isTrue ? '✓' : '✗'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )})}
                    </div>
                    <button onClick={onCancel} className="btn-secondary cursor-pointer hover:shadow-none!">Close</button>
                </div>
            </div>
    )
}
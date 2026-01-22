import { calculusQuestions } from './Math/Calculus';
import { numberTheoryQuestions } from './Math/NumberTheory';
import { statisticsQuestions } from './Math/Statistics';
import { topologyQuestions } from './Math/Topology';
import { linearAlgebraQuestions } from './Math/LinearAlgebra';
import { geometryQuestions } from './Math/Geometry';
// Import your other 26 files here...
export interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
    hint: string;
}

export interface SubjectData {
    Easy: Question[];
    Medium: Question[];
    Hard: Question[];
}

export const QuizRegistry: Record<string, SubjectData> = {
    calculus: calculusQuestions,
    numberTheory: numberTheoryQuestions,
    statistics: statisticsQuestions,
    topology: topologyQuestions,
    linearAlgebra: linearAlgebraQuestions,
    geometry: geometryQuestions,
    // Add the rest here...
};

// This helper type allows you to restrict variables to only valid subject names
export type SubjectKey = keyof typeof QuizRegistry;
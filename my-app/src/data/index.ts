// All subjects are lazy-loaded via dynamic import to keep the initial bundle small.
// Each entry returns a Promise that resolves to that subject's { Easy, Medium, Hard } questions.
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
export interface QuizBankType {
    [subject: string]: SubjectData;
}

export type SubjectLoader = () => Promise<SubjectData>;

export const QuizRegistry = {
    calculus: () => import("./Math/Calculus").then((m) => m.calculusQuestions),
    numbertheory: () => import("./Math/NumberTheory").then((m) => m.numberTheoryQuestions),
    statistics: () => import("./Math/Statistics").then((m) => m.statisticsQuestions),
    topology: () => import("./Math/Topology").then((m) => m.topologyQuestions),
    linearalgebra: () => import("./Math/LinearAlgebra").then((m) => m.linearAlgebraQuestions),
    geometry: () => import("./Math/Geometry").then((m) => m.geometryQuestions),

    astrophysics: () => import("./Physics/Astrophysics").then((m) => m.astrophysicsQuestions),
    electromagnetism: () => import("./Physics/Electromagnetism").then((m) => m.electromagnetismQuestions),
    nuclearphysics: () => import("./Physics/NuclearPhysics").then((m) => m.nuclearPhysicsQuestions),
    optics: () => import("./Physics/Optics").then((m) => m.opticsQuestions),
    quantummechanics: () => import("./Physics/QuantumMechanics").then((m) => m.quantumMechanicsQuestions),
    thermodynamics: () => import("./Physics/Thermodynamics").then((m) => m.thermodynamicsQuestions),

    botany: () => import("./Biology/Botany").then((m) => m.botanyQuestions),
    ecology: () => import("./Biology/Ecology").then((m) => m.ecologyQuestions),
    genetics: () => import("./Biology/Genetics").then((m) => m.geneticsQuestions),
    microbiology: () => import("./Biology/Microbiology").then((m) => m.microbiologyQuestions),
    neuroscience: () => import("./Biology/Neuroscience").then((m) => m.neuroscienceQuestions),
    zoology: () => import("./Biology/Zoology").then((m) => m.zoologyQuestions),

    analyticalchemistry: () => import("./Chemistry/AnalyticalChemistry").then((m) => m.analyticalChemistryQuestions),
    biochemistry: () => import("./Chemistry/Biochemistry").then((m) => m.biochemistryQuestions),
    geochemistry: () => import("./Chemistry/Geochemistry").then((m) => m.geochemistryQuestions),
    inorganicchemistry: () => import("./Chemistry/InorganicChemistry").then((m) => m.inorganicChemistryQuestions),
    organicchemistry: () => import("./Chemistry/OrganicChemistry").then((m) => m.organicChemistryQuestions),
    physicalchemistry: () => import("./Chemistry/PhysicalChemistry").then((m) => m.physicalChemistryQuestions),

    algorithms: () => import("./ComputerScience/Algorithms").then((m) => m.algorithmsQuestions),
    artificialintelligence: () => import("./ComputerScience/ArtificialIntelligence").then((m) => m.aiQuestions),
    computergraphics: () => import("./ComputerScience/ComputerGraphics").then((m) => m.computerGraphicsQuestions),
    cryptography: () => import("./ComputerScience/Cryptography").then((m) => m.cryptographyQuestions),
    datastructures: () => import("./ComputerScience/DataStructures").then((m) => m.dataStructuresQuestions),
    softwareengineering: () => import("./ComputerScience/SoftwareEngineering").then((m) => m.softwareEngineeringQuestions),

    environmentalscience: () => import("./EarthScience/EnvironmentalScience").then((m) => m.environmentalScienceQuestions),
    geology: () => import("./EarthScience/Geology").then((m) => m.geologyQuestions),
    meteorology: () => import("./EarthScience/Meteorology").then((m) => m.meteorologyQuestions),
    oceanography: () => import("./EarthScience/Oceanography").then((m) => m.oceanographyQuestions),
    paleontology: () => import("./EarthScience/Paleontology").then((m) => m.paleontologyQuestions),
    seismology: () => import("./EarthScience/Seismology").then((m) => m.seismologyQuestions),
} as const satisfies Record<string, SubjectLoader>;

// This helper type allows you to restrict variables to only valid subject names
export type SubjectKey = keyof typeof QuizRegistry;
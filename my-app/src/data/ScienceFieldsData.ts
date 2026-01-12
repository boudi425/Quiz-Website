/**
 * scienceFields.ts
 * A structured collection of major scientific disciplines and their sub-fields.
 */

interface ScienceField {
  name: string;
  description: string;
  variants: string[];
}

export const scienceData: Record<string, ScienceField> = {
  Physics: {
    name: "Physics",
    description: "The study of matter, energy, and the fundamental forces of nature.",
    variants: ["Quantum Mechanics", "Thermodynamics", "Astrophysics", "Electromagnetism", "Optics", "Nuclear Physics"]
  },
  Mathematics: {
    name: "Mathematics",
    description: "The abstract science of number, quantity, and space.",
    variants: ["Geometry", "Calculus", "Linear Algebra", "Number Theory", "Statistics", "Topology"]
  },
  Biology: {
    name: "Biology",
    description: "The study of living organisms and their vital processes.",
    variants: ["Genetics", "Microbiology", "Ecology", "Neuroscience", "Botany", "Zoology"]
  },
  Chemistry: {
    name: "Chemistry",
    description: "The study of substances and the changes they undergo.",
    variants: ["Organic Chemistry", "Biochemistry", "Inorganic Chemistry", "Analytical Chemistry", "Physical Chemistry", "Geochemistry"]
  },
  EarthScience: {
    name: "Earth Science",
    description: "The study of the physical constitution of the Earth and its atmosphere.",
    variants: ["Geology", "Meteorology", "Oceanography", "Paleontology", "Seismology", "Environmental Science"]
  },
  ComputerScience: {
    name: "Computer Science",
    description: "The study of computation, automation, and information.",
    variants: ["Artificial Intelligence", "Cryptography", "Data Structures", "Computer Graphics", "Software Engineering", "Algorithms"]
  }
};
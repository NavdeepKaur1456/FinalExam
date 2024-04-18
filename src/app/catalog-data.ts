// catalog-data.ts
import { CollegeStructure } from './json-structure';

export const COLLEGE_DATA: CollegeStructure = {
  name: "Sheridan College",
  type: "public",
  established: 1967,
  students: {
    fullTime: 23000,
    partTime: 35000,
  },
  image: "sheridan_davis.jpg",
  location: "Ontario, Canada",
};

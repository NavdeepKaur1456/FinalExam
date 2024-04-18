// json-structure.ts
export interface CollegeStructure {
  name: string;
  type: string;
  established: number;
  students: {
    fullTime: number;
    partTime: number;
  };
  image: string;
  location: string;
}

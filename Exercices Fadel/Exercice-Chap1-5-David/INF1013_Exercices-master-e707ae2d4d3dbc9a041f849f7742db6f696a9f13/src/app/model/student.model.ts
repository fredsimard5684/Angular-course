import { Score } from './score.model';
export interface Student {
  gender: 'male'|'female';
  fName: string;
  lName: string;
  cp: string;
  scores: Score[];
}

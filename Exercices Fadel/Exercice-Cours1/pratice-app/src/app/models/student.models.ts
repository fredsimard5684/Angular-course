import {Score} from "./score.models";

export interface Student {
  fname:string,
  lname:string,
  cp:string,
  scores: Score[]
}

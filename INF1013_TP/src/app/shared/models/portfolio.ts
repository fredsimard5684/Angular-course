import {Picture} from "./picture";
import {Availabilities} from "./availabilities";

export interface Portfolio {
  id: string;
  userId: string;
  title: string;
  catchyHeadline: string;
  description: string | null;
  availabilities: Availabilities[] | null;
  pictures: Picture[] | null;
}

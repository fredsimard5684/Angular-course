import {Picture} from "./picture";
import {UserType} from "../enums/user-type";

export interface User {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  userType: UserType;
  profilePicture: Picture | null;
}

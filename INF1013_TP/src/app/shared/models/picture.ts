import {PictureType} from "../enums/picture-type";

export interface Picture {
  id: string;
  idUser: string;
  name: string;
  pictureType: PictureType;
  path: string;
  size: number;
}

import { RequestStatus } from '../enums/request-status';
import { Address } from './address';

export interface Request {
  id: string;
  userId: string;
  address: Address;
  requestStatus: RequestStatus;
  requestDate: Date;
  startTime: Date;
  endTime: Date;
}

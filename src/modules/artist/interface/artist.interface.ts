import { Document } from 'mongoose';

export interface Artist extends Document {
  readonly _id: string;
  readonly firstName: string;
  readonly secondName: string;
  readonly middleName: string;
  readonly birthDate: string;
  readonly birthPlace: string;
  readonly country: string;
  readonly bandsIds: string[];
  readonly instruments: string[];
}

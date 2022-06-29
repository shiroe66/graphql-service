import mongoose from 'mongoose';

export const ArtistSchema = new mongoose.Schema({
  _id: String,
  firstName: String,
  secondName: String,
  middleName: String,
  birthDate: String,
  birthPlace: String,
  country: String,
  bandsIds: [String],
  instruments: [String],
});

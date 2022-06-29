import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Artist } from './interface/artist.interface';
import { createArtistDto } from './dto/create-artist.dto';

@Injectable()
export class ArtistService {
  constructor(@InjectModel('Artist') private artistModel: Model<Artist>) {}

  async create(createArtistDto: createArtistDto): Promise<Artist> {
    const createdArtist = new this.artistModel(createArtistDto);
    return createdArtist.save();
  }

  async update(): Promise<Artist> {
    return this.artistModel.findOneAndUpdate();
  }

  async delete(): Promise<Artist> {
    return this.artistModel.findOneAndDelete();
  }
}

import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateArtistInput } from 'src/graphql';

@Injectable()
export class ArtistsService {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create({ baseURL: process.env.ARTISTS_URL });
  }

  async create(input: CreateArtistInput) {
    const { data } = await this.client.post('/', input);
    return data;
  }

  async update() {}

  async delete() {}
}

import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { CreateArtist } from 'src/graphql'
import 'dotenv/config'

@Injectable()
export class ArtistsService {
  private client: AxiosInstance
  constructor() {
    this.client = axios.create({ baseURL: process.env.ARTISTS_URL })
  }

  async findAll({ limit, offset: number }) {
    const { data } = await this.client.get('/')
    return data
  }

  async create(artist: CreateArtist, token: any) {
    try {
      const { data } = await this.client.post('/', artist, {
        headers: { Authorization: token },
      })

      return data
    } catch (error) {
      console.error(error)
    }
  }

  async update() {}

  async delete() {}
}

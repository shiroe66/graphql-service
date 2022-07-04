import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { CreateArtist, UpdateArtist } from 'src/graphql'

@Injectable()
export class ArtistsService {
  private client: AxiosInstance
  constructor() {
    this.client = axios.create({ baseURL: process.env.ARTISTS_URL })
  }

  async getById(id: string) {
    const { data } = await this.client.get(`/${id}`)
    return data
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

  async update(id: string, artist: UpdateArtist, token: any) {
    try {
      const { data } = await this.client.put(`/${id}`, artist, {
        headers: { Authorization: token },
      })

      return data
    } catch (error) {
      console.error(error)
    }
  }

  async delete(id: string, token: any) {
    try {
      const { data } = await this.client.delete(`/${id}`, { headers: { Authorization: token } })
      return data
    } catch (error) {
      console.error(error)
    }
  }
}

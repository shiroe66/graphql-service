import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { ArtistData, CreateArtist, UpdateArtist } from 'src/graphql'

@Injectable()
export class ArtistsService {
  private client: AxiosInstance
  constructor() {
    this.client = axios.create({ baseURL: process.env.ARTISTS_URL })
  }

  async getById(id: string) {
    const { data } = await this.client.get(`/${id}`)
    return { ...data, id: data._id }
  }

  async getAll({ limit = 20, offset = 1 }) {
    try {
      const { data } = await this.client.get(`?limit=${limit}&offset=${offset}`)
      data.items = data.items.map((item) => ({
        ...item,
        id: item._id,
      }))
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async create(artist: CreateArtist, token: any) {
    try {
      const { data } = await this.client.post('/', artist, {
        headers: { Authorization: token },
      })

      return { ...data, id: data._id }
    } catch (error) {
      console.error(error)
    }
  }

  async update(id: string, artist: UpdateArtist, token: any) {
    try {
      const { data } = await this.client.put(`/${id}`, artist, {
        headers: { Authorization: token },
      })

      return { ...data, id: data._id }
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

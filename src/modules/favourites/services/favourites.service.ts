import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'

@Injectable()
export class FavouritesService {
  private client: AxiosInstance
  constructor() {
    this.client = axios.create({ baseURL: process.env.FAVOURITES_URL })
  }

  async getAll(token: string) {
    const { data } = await this.client.get('/', { headers: { Authorization: token } })
    return { ...data, id: data._id }
  }

  async track(id: string, token: string) {
    const { data } = await this.client.put(
      '/add',
      { type: 'tracks', id },
      { headers: { Authorization: token } }
    )

    return { ...data, id: data._id }
  }

  async bands(id: string, token: string) {
    const { data } = await this.client.put(
      '/add',
      { type: 'bands', id },
      { headers: { Authorization: token } }
    )

    return { ...data, id: data._id }
  }

  async artist(id: string, token: string) {
    const { data } = await this.client.put(
      '/',
      { type: 'artists', id },
      { headers: { Authorization: token } }
    )

    return { ...data, id: data._id }
  }
}

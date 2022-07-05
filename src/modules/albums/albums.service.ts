import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { CreateAlbum, Paginate, UpdateAlbum } from 'src/graphql'

@Injectable()
export class AlbumsService {
  private client: AxiosInstance
  constructor() {
    this.client = axios.create({ baseURL: process.env.ALBUMS_URL })
  }

  async getById(id: string) {
    const { data } = await this.client.get(`/${id}`)
    return data
  }

  async getAll({ limit, offset }: Paginate) {
    try {
      const { data } = await this.client.get(`?limit=${limit}&offset=${offset}`)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async create(album: CreateAlbum, token: any) {
    try {
      const { data } = await this.client.post('/', album, {
        headers: { Authorization: token },
      })

      return data
    } catch (error) {
      console.error(error)
    }
  }

  async update(id: string, album: UpdateAlbum, token: any) {
    try {
      const { data } = await this.client.put(`/${id}`, album, {
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

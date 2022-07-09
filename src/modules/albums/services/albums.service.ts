import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { CreateAlbum, UpdateAlbum } from 'src/graphql'

@Injectable()
export class AlbumsService {
  private client: AxiosInstance
  constructor() {
    this.client = axios.create({ baseURL: process.env.ALBUMS_URL })
  }

  async getById(id: string) {
    const { data } = await this.client.get(`/${id}`)
    return { ...data, id: data._id }
  }

  async getAll({ limit, offset }) {
    try {
      const { data } = await this.client.get(`?limit=${limit}&offset=${offset}`)
      data.items = data.items.map((item) => {
        return { ...item, id: item._id }
      })
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async create(album: CreateAlbum, token: string) {
    try {
      const { data } = await this.client.post('/', album, {
        headers: { Authorization: token },
      })

      return { ...data, id: data._id }
    } catch (error) {
      console.error(error)
    }
  }

  async update(id: string, album: UpdateAlbum, token: string) {
    try {
      const { data } = await this.client.put(`/${id}`, album, {
        headers: { Authorization: token },
      })

      return { ...data, id: data._id }
    } catch (error) {
      console.error(error)
    }
  }

  async delete(id: string, token: string) {
    try {
      const { data } = await this.client.delete(`/${id}`, { headers: { Authorization: token } })
      return data
    } catch (error) {
      console.error(error)
    }
  }
}

import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { CreateGenre, UpdateGenre } from 'src/graphql'

@Injectable()
export class GenresService {
  private readonly client: AxiosInstance
  constructor() {
    this.client = axios.create({
      baseURL: process.env.GENRES_URL,
    })
  }

  async getById(id: string) {
    try {
      const { data } = await this.client.get(`/${id}`)
      return { ...data, id: data._id }
    } catch (error) {
      console.error(error)
    }
  }

  async getAll({ limit, offset }) {
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

  async create(genre: CreateGenre, token: string) {
    try {
      const { data } = await this.client.post('/', genre, {
        headers: { Authorization: token },
      })
      return { ...data, id: data._id }
    } catch (error) {
      console.error(error)
    }
  }

  async update(id: string, genre: UpdateGenre, token: string) {
    try {
      const { data } = await this.client.put(`/${id}`, genre, {
        headers: { Authorization: token },
      })
      return { ...data, id: data._id }
    } catch (error) {
      console.error(error)
    }
  }

  async delete(id: string, token: string) {
    try {
      const { data } = await this.client.delete(`/${id}`, {
        headers: { Authorization: token },
      })
      return data
    } catch (error) {
      console.error(error)
    }
  }
}

import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { CreateTrack, UpdateTrack } from 'src/graphql'

@Injectable()
export class TracksService {
  private readonly track: AxiosInstance
  constructor() {
    this.track = axios.create({
      baseURL: process.env.TRACKS_URL,
    })
  }

  async getById(id: string) {
    try {
      const { data } = await this.track.get(`/${id}`)
      return { ...data, id: data._id }
    } catch (error) {
      console.error(error)
    }
  }

  async getAll({ limit, offset }) {
    try {
      const { data } = await this.track.get(`?limit=${limit}&offset=${offset}`)
      data.items = data.items.map((item) => {
        return { ...item, id: item._id }
      })
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async create(track: CreateTrack, token: string) {
    try {
      const { data } = await this.track.post('/', track, {
        headers: { Authorization: token },
      })
      return { ...data, id: data._id }
    } catch (error) {
      console.error(error)
    }
  }

  async update(id: string, track: UpdateTrack, token: string) {
    try {
      const { data } = await this.track.put(`/${id}`, track, {
        headers: { Authorization: token },
      })
      return { ...data, id: data._id }
    } catch (error) {
      console.error(error)
    }
  }

  async delete(id: string, token: string) {
    try {
      const { data } = await this.track.delete(`/${id}`, {
        headers: { Authorization: token },
      })
      return data
    } catch (error) {
      console.error(error)
    }
  }
}

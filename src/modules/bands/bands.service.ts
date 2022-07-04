import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { CreateBand, Paginate, UpdateBand } from 'src/graphql'

@Injectable()
export class BandsService {
  client: AxiosInstance

  constructor() {
    this.client = axios.create({ baseURL: process.env.BANDS_URL })
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

  async create(band: CreateBand, token: any) {
    try {
      const { data } = await this.client.post('/', band, {
        headers: { Authorization: token },
      })

      return data
    } catch (error) {
      console.error(error)
    }
  }

  async update(id: string, band: UpdateBand, token: any) {
    try {
      const { data } = await this.client.put(`/${id}`, band, {
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

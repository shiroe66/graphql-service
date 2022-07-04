import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateBand, UpdateBand } from 'src/graphql'
import { BandsService } from './bands.service'

@Resolver()
export class BandsResolver {
  constructor(private readonly bandsService: BandsService) {}

  @Mutation('createBand')
  async createBand(@Args('band') band: CreateBand, @Context('token') token: any) {
    return this.bandsService.create(band, token)
  }

  @Mutation('updateBand')
  async updateBand(
    @Args('id') id: string,
    @Args('band') band: UpdateBand,
    @Context('token') token: any
  ) {
    return this.bandsService.update(id, band, token)
  }

  @Mutation('deleteBand')
  async deleteBand(@Args('id') id: string, @Context('token') token: any) {
    return this.bandsService.delete(id, token)
  }

  @Query('getByIdBand')
  async getById(@Args('id') id: string) {
    return this.bandsService.getById(id)
  }

  @Query('getAllBands')
  async getAll(@Args('Paginate') { limit, offset }) {
    return this.bandsService.getAll({ limit, offset })
  }
}

import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { CreateBand, UpdateBand } from 'src/graphql'
import { GenresService } from 'src/modules/genres/services/genres.service'
import { BandsService } from '../services/bands.service'

@Resolver('Band')
export class BandsResolver {
  constructor(private readonly bandsService: BandsService, private genresService: GenresService) {}

  @Query('band')
  async getById(@Args('id') id: string) {
    return this.bandsService.getById(id)
  }

  @Query('bands')
  async getAll(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.bandsService.getAll({ limit, offset })
  }

  @ResolveField()
  async genres(@Parent() band: CreateBand) {
    const { genresIds } = band

    const data = await Promise.all(
      genresIds.map((genre: string) => {
        return this.genresService.getById(genre)
      })
    )

    return data.filter((data) => data)
  }

  @Mutation('createBand')
  async createBand(@Args('band') band: CreateBand, @Context('token') token: string) {
    return this.bandsService.create(band, token)
  }

  @Mutation('updateBand')
  async updateBand(
    @Args('id') id: string,
    @Args('band') band: UpdateBand,
    @Context('token') token: string
  ) {
    return this.bandsService.update(id, band, token)
  }

  @Mutation('deleteBand')
  async deleteBand(@Args('id') id: string, @Context('token') token: string) {
    return this.bandsService.delete(id, token)
  }
}

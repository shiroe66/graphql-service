import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { CreateBand, UpdateBand } from 'src/graphql'
import { GenresService } from 'src/modules/genres/genres.service'
import { BandsService } from '../services/bands.service'

@Resolver('Band')
export class BandsResolver {
  constructor(private readonly bandsService: BandsService, private genresService: GenresService) {}

  @Query('band')
  async getById(@Args('id') id: string) {
    return this.bandsService.getById(id)
  }

  @Query('bands')
  async getAll(@Args('Paginate') { limit, offset }) {
    return this.bandsService.getAll({ limit, offset })
  }

  @ResolveField()
  async genres(@Parent() band: CreateBand) {
    const { genresIds } = band

    return Promise.all(
      genresIds.map((genre) => {
        return this.genresService.getById(genre)
      })
    )
  }

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
}

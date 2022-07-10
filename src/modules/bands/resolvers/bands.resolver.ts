import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { CreateBand, CreateMember, Member, UpdateBand } from 'src/graphql'
import { ArtistsService } from 'src/modules/artists/services/artists.service'
import { GenresService } from 'src/modules/genres/services/genres.service'
import { BandsService } from '../services/bands.service'

@Resolver('Band')
export class BandsResolver {
  constructor(
    private readonly bandsService: BandsService,
    private genresService: GenresService,
    private artistsService: ArtistsService
  ) {}

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

  @ResolveField()
  async members(@Parent() band: CreateBand) {
    const { members } = band

    return members.map(async (member: CreateMember): Promise<Member> => {
      const artist = await this.artistsService.getById(member.artist)
      return { ...member, artist }
    })
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

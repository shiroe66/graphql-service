import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { CreateArtist, UpdateArtist } from 'src/graphql'
import { BandsService } from '../../bands/services/bands.service'
import { ArtistsService } from '../services/artists.service'

@Resolver('Artist')
export class ArtistsResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private bandsService: BandsService
  ) {}

  @Query('artist')
  async getById(@Args('id') id: string) {
    return this.artistsService.getById(id)
  }

  @Query('artists')
  async getAll(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.artistsService.getAll({ limit, offset })
  }

  @ResolveField()
  async bands(@Parent() artist: CreateArtist) {
    const { bandsIds } = artist

    return await Promise.all(
      bandsIds.map((band: any) => {
        return this.bandsService.getById(band)
      })
    )
  }

  @Mutation('createArtist')
  async createArtist(@Args('artist') artist: CreateArtist, @Context('token') token: string) {
    return this.artistsService.create(artist, token)
  }

  @Mutation('updateArtist')
  async updateArtist(
    @Args('id') id: string,
    @Args('artist') artist: UpdateArtist,
    @Context('token') token: string
  ) {
    return this.artistsService.update(id, artist, token)
  }

  @Mutation('deleteArtist')
  async deleteArtist(@Args('id') id: string, @Context('token') token: string) {
    return this.artistsService.delete(id, token)
  }
}

import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateArtist, UpdateArtist } from 'src/graphql'
import { ArtistsService } from './artists.service'

@Resolver()
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  @Mutation('createArtist')
  async createArtist(@Args('artist') artist: CreateArtist, @Context('token') token: any) {
    return this.artistsService.create(artist, token)
  }

  @Mutation('updateArtist')
  async updateArtist(
    @Args('id') id: string,
    @Args('artist') artist: UpdateArtist,
    @Context('token') token: any
  ) {
    return this.artistsService.update(id, artist, token)
  }

  @Query('getById')
  async getById(@Args('id') id: string) {
    return this.artistsService.getById(id)
  }

  @Query('getAll')
  async getAll(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.artistsService.findAll({ limit, offset })
  }
}

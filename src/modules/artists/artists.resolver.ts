import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateArtist } from 'src/graphql'
import { ArtistsService } from './artists.service'

@Resolver()
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  @Mutation('createArtist')
  async createArtist(@Args('artist') artist: CreateArtist, @Context('token') token: any) {
    return this.artistsService.create(artist, token)
  }

  @Query('getAll')
  async getAll(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.artistsService.findAll({ limit, offset })
  }
}

import { Resolver, Query, Args, ResolveField, Mutation, Context, Parent } from '@nestjs/graphql'
import { CreateTrack, UpdateTrack } from 'src/graphql'
import { AlbumsService } from 'src/modules/albums/services/albums.service'
import { ArtistsService } from 'src/modules/artists/services/artists.service'
import { BandsService } from 'src/modules/bands/services/bands.service'
import { GenresService } from 'src/modules/genres/services/genres.service'
import { TracksService } from '../services/tracks.service'

@Resolver('Track')
export class TracksResolver {
  constructor(
    private readonly tracksService: TracksService,
    private readonly albumsService: AlbumsService,
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService
  ) {}

  @Query('track')
  async getById(@Args('id') id: string) {
    return this.tracksService.getById(id)
  }

  @Query('tracks')
  async getAll(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.tracksService.getAll({ limit, offset })
  }

  @ResolveField()
  async album(@Parent() track: CreateTrack) {
    const { albumId } = track
    return await this.albumsService.getById(albumId)
  }

  @ResolveField()
  async artists(@Parent() track: CreateTrack) {
    const { artistsIds } = track

    const data = await Promise.all(
      artistsIds.map((artist: string) => {
        return this.artistsService.getById(artist)
      })
    )

    return data.filter((data) => data)
  }

  @ResolveField()
  async bands(@Parent() track: CreateTrack) {
    const { bandsIds } = track

    const data = await Promise.all(
      bandsIds.map((bands: string) => {
        return this.bandsService.getById(bands)
      })
    )

    return data.filter((data) => data)
  }

  @ResolveField()
  async genres(@Parent() track: CreateTrack) {
    const { genresIds } = track

    const data = await Promise.all(
      genresIds.map((genres: string) => {
        return this.genresService.getById(genres)
      })
    )

    return data.filter((data) => data)
  }

  @Mutation('createTrack')
  async createTrack(@Args('track') track: CreateTrack, @Context('token') token: string) {
    return this.tracksService.create(track, token)
  }

  @Mutation('updateTrack')
  async updateTrack(
    @Args('id') id: string,
    @Args('track') track: UpdateTrack,
    @Context('token') token: string
  ) {
    return this.tracksService.update(id, track, token)
  }

  @Mutation('deleteTrack')
  async deleteTrack(@Args('id') id: string, @Context('token') token: string) {
    return this.tracksService.delete(id, token)
  }
}

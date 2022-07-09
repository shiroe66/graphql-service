import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { CreateAlbum, UpdateAlbum } from 'src/graphql'
import { ArtistsService } from 'src/modules/artists/services/artists.service'
import { BandsService } from 'src/modules/bands/services/bands.service'
import { GenresService } from 'src/modules/genres/services/genres.service'
import { TracksService } from 'src/modules/tracks/services/tracks.service'
import { AlbumsService } from '../services/albums.service'

@Resolver('Album')
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly artistsService: ArtistsService,
    private readonly bandsServices: BandsService,
    private readonly tracksService: TracksService,
    private readonly genresService: GenresService
  ) {}

  @Query('album')
  async getById(@Args('id') id: string) {
    return this.albumsService.getById(id)
  }

  @Query('albums')
  async getAll(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.albumsService.getAll({ limit, offset })
  }

  @ResolveField()
  async artists(@Parent() album: CreateAlbum) {
    const { artistsIds } = album

    return await Promise.all(
      artistsIds.map((artist: string) => {
        return this.artistsService.getById(artist)
      })
    )
  }

  @ResolveField()
  async bands(@Parent() album: CreateAlbum) {
    const { bandsIds } = album

    return await Promise.all(
      bandsIds.map((band: string) => {
        return this.bandsServices.getById(band)
      })
    )
  }

  @ResolveField()
  async tracks(@Parent() album: CreateAlbum) {
    const { tracksIds } = album

    return await Promise.all(
      tracksIds.map((track: string) => {
        return this.tracksService.getById(track)
      })
    )
  }

  @ResolveField()
  async genres(@Parent() album: CreateAlbum) {
    const { genresIds } = album

    return await Promise.all(
      genresIds.map((genres: string) => {
        return this.genresService.getById(genres)
      })
    )
  }

  @Mutation('createAlbum')
  async createAlbum(@Args('album') album: CreateAlbum, @Context('token') token: string) {
    return this.albumsService.create(album, token)
  }

  @Mutation('updateAlbum')
  async updateAlbum(
    @Args('id') id: string,
    @Args('album') album: UpdateAlbum,
    @Context('token') token: string
  ) {
    return this.albumsService.update(id, album, token)
  }

  @Mutation('deleteAlbum')
  async deleteAlbum(@Args('id') id: string, @Context('token') token: string) {
    return this.albumsService.delete(id, token)
  }
}

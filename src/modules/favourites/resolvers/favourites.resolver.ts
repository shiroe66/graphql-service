import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FavouritesResponse } from 'src/graphql'
import { ArtistsService } from 'src/modules/artists/services/artists.service'
import { BandsService } from 'src/modules/bands/services/bands.service'
import { GenresService } from 'src/modules/genres/services/genres.service'
import { TracksService } from 'src/modules/tracks/services/tracks.service'
import { FavouritesService } from '../services/favourites.service'

@Resolver('Favourites')
export class FavouritesResolver {
  constructor(
    private readonly favouritesService: FavouritesService,
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly artistsSerivce: ArtistsService
  ) {}

  @Query('favourites')
  async getAll(@Context('token') token: string) {
    return this.favouritesService.getAll(token)
  }

  @Mutation('addTrackToFavourites')
  async addTrackToFavourites(@Args('id') id: string, @Context('token') token: string) {
    return this.favouritesService.track(id, token)
  }

  @ResolveField()
  async tracks(@Parent() favourites: FavouritesResponse) {
    const { tracksIds } = favourites

    const data = await Promise.all(
      tracksIds.map((track: string) => {
        return this.tracksService.getById(track)
      })
    )

    return data.filter((data) => data)
  }

  @Mutation('addBandToFavourites')
  async addBandToFavourites(@Args('id') id: string, @Context('token') token: string) {
    return this.favouritesService.bands(id, token)
  }

  @ResolveField()
  async bands(@Parent() favourites: FavouritesResponse) {
    const { bandsIds } = favourites

    const data = await Promise.all(
      bandsIds.map((band: string) => {
        return this.bandsService.getById(band)
      })
    )

    return data.filter((data) => data)
  }

  @Mutation('addArtistToFavourites')
  async addArtistToFavourites(@Args('id') id: string, @Context('token') token: string) {
    return this.favouritesService.bands(id, token)
  }

  @ResolveField()
  async artists(@Parent() favourites: FavouritesResponse) {
    const { artistsIds } = favourites

    const data = await Promise.all(
      artistsIds.map((artist: string) => {
        return this.artistsSerivce.getById(artist)
      })
    )

    return data.filter((data) => data)
  }

  @Mutation('addGenreToFavourites')
  async addGenreToFavourites(@Args('id') id: string, @Context('token') token: string) {
    return this.favouritesService.genres(id, token)
  }

  @ResolveField()
  async genres(@Parent() favourites: FavouritesResponse) {
    const { genresIds } = favourites

    const data = await Promise.all(
      genresIds.map((genres: string) => {
        return this.genresService.getById(genres)
      })
    )

    return data.filter((data) => data)
  }
}

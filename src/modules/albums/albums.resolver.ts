import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateAlbum, UpdateAlbum } from 'src/graphql'
import { AlbumsService } from './albums.service'

@Resolver()
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

  @Query('album')
  async getById(@Args('id') id: string) {
    return this.albumsService.getById(id)
  }

  @Query('albums')
  async getAll(@Args('Paginate') { limit, offset }) {
    return this.albumsService.getAll({ limit, offset })
  }

  @Mutation('createAlbum')
  async createAlbum(@Args('album') album: CreateAlbum, @Context('token') token: any) {
    return this.albumsService.create(album, token)
  }

  @Mutation('updateAlbum')
  async updateAlbum(
    @Args('id') id: string,
    @Args('album') album: UpdateAlbum,
    @Context('token') token: any
  ) {
    return this.albumsService.update(id, album, token)
  }

  @Mutation('deleteAlbum')
  async deleteAlbum(@Args('id') id: string, @Context('token') token: any) {
    return this.albumsService.delete(id, token)
  }
}

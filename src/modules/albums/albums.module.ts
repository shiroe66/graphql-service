import { Module } from '@nestjs/common'
import { AlbumsResolver } from './albums.resolver'
import { AlbumsService } from './albums.service'

@Module({
  providers: [AlbumsResolver, AlbumsService],
})
export class AlbumsModule {}

import { Module } from '@nestjs/common'
import { ArtistsService } from './services/artists.service'
import { ArtistsResolver } from './resolvers/artists.resolver'
import { BandsService } from '../bands/services/bands.service'
import { GenresService } from '../genres/services/genres.service'

@Module({
  providers: [ArtistsService, ArtistsResolver, BandsService, GenresService],
})
export class ArtistsModule {}

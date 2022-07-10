import { Module } from '@nestjs/common'
import { ArtistsService } from '../artists/services/artists.service'
import { GenresService } from '../genres/services/genres.service'
import { BandsResolver } from './resolvers/bands.resolver'
import { BandsService } from './services/bands.service'

@Module({
  providers: [BandsResolver, BandsService, GenresService, ArtistsService],
})
export class BandsModule {}

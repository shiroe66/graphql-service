import { Module } from '@nestjs/common'
import { GenresService } from '../genres/services/genres.service'
import { BandsResolver } from './resolvers/bands.resolver'
import { BandsService } from './services/bands.service'

@Module({
  providers: [BandsResolver, BandsService, GenresService],
})
export class BandsModule {}

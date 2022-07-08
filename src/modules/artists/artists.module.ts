import { Module } from '@nestjs/common'
import { ArtistsService } from './services/artists.service'
import { ArtistsResolver } from './resolvers/artists.resolver'
import { BandsModule } from '../bands/bands.module'
import { BandsService } from '../bands/bands.service'
import { BandsResolver } from '../bands/bands.resolver'

@Module({
  imports: [BandsModule],
  providers: [ArtistsService, ArtistsResolver, BandsService, BandsResolver],
})
export class ArtistsModule {}

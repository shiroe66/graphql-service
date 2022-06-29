import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistResolver } from './artist.resolvers';
import { ArtistSchema } from './artist.schema';
import { ArtistService } from './artist.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Artist', schema: ArtistSchema }]),
  ],
  providers: [ArtistResolver, ArtistService],
})
export class ArtistModule {}

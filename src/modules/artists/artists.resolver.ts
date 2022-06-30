import { Resolver } from '@nestjs/graphql';
import { ArtistsService } from './artists.service';

@Resolver()
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  async createArtist() {
    this.artistsService.create;
  }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArtistService } from './artist.service';
import { createArtistDto } from './dto/create-artist.dto';
import { ArtistInput } from './input/artist.input';

@Resolver()
export class ArtistResolver {
  constructor(private readonly artistService: ArtistService) {}

  @Mutation(() => createArtistDto)
  async createArtist(@Args('input') input: ArtistInput) {
    return this.artistService.create(input);
  }

  @Query(() => String)
  async updateArtist() {
    return this.artistService.update();
  }

  @Query(() => createArtistDto)
  async deleteArtist() {
    return this.artistService.delete();
  }
}

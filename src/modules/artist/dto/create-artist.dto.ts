import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class createArtistDto {
  @Field()
  readonly firstName: string;
  @Field()
  readonly secondName: string;
  @Field()
  readonly middleName: string;
  @Field()
  readonly birthDate: string;
  @Field()
  readonly birthPlace: string;
  @Field()
  readonly country: string;
  @Field()
  readonly bandsIds: string[];
  @Field()
  readonly instruments: string[];
}

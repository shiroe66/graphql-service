import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { ArtistsModule } from './modules/artists/artists.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      playground: true,
      driver: ApolloDriver,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    ArtistsModule,
  ],
})
export class AppModule {}

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { ArtistsModule } from './modules/artists/artists.module'
import { UsersModule } from './modules/users/users.module'
import { GenresModule } from './modules/genres/genres.module'

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
    ArtistsModule,
    UsersModule,
    GenresModule,
  ],
})
export class AppModule {}

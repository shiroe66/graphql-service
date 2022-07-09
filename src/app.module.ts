import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { ArtistsModule } from './modules/artists/artists.module'
import { UsersModule } from './modules/users/users.module'
import { GenresModule } from './modules/genres/genres.module'
import { BandsModule } from './modules/bands/bands.module'
import { AlbumsModule } from './modules/albums/albums.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      context: ({ req }) => {
        const token = req.headers.authorization || ''
        return { token }
      },
      playground: true,
      driver: ApolloDriver,
    }),
    ArtistsModule,
    BandsModule,
    GenresModule,
    UsersModule,
    AlbumsModule,
  ],
})
export class AppModule {}

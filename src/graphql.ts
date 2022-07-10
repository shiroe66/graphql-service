
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateAlbum {
    name: string;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    tracksIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface UpdateAlbum {
    id?: Nullable<string>;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    tracksIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface CreateArtist {
    firstName: string;
    secondName: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country: string;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface UpdateArtist {
    _id?: Nullable<string>;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<string>;
}

export interface CreateBand {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<string>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateBand {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<string>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface CreateMember {
    artist: string;
    instrument?: Nullable<string>;
    years?: Nullable<string>;
}

export interface CreateGenre {
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface UpdateGenre {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface CreateTrack {
    title: string;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateTrack {
    id: string;
    title: string;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface RegisterUser {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    favouriteArtistIds?: Nullable<Nullable<string>[]>;
    favouriteSongsIds?: Nullable<Nullable<string>[]>;
    favouriteBandsIds?: Nullable<Nullable<string>[]>;
    favouriteGenresIds?: Nullable<Nullable<string>[]>;
}

export interface Login {
    email: string;
    password: string;
}

export interface Album {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export interface AlbumData {
    items?: Nullable<Nullable<Album>[]>;
    offset?: Nullable<number>;
    limit?: Nullable<number>;
    total?: Nullable<number>;
}

export interface IQuery {
    albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<AlbumData> | Promise<Nullable<AlbumData>>;
    album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<ArtistData> | Promise<Nullable<ArtistData>>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<BandsData> | Promise<Nullable<BandsData>>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    favourites(): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<GenresData> | Promise<Nullable<GenresData>>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<TrackData> | Promise<Nullable<TrackData>>;
    track(id?: Nullable<string>): Nullable<Track> | Promise<Nullable<Track>>;
    getUser(id: string): Nullable<User> | Promise<Nullable<User>>;
    login(login: Login): Nullable<JWT> | Promise<Nullable<JWT>>;
}

export interface IMutation {
    createAlbum(album?: Nullable<CreateAlbum>): Nullable<Album> | Promise<Nullable<Album>>;
    updateAlbum(id: string, album?: Nullable<UpdateAlbum>): Nullable<Album> | Promise<Nullable<Album>>;
    deleteAlbum(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    createArtist(artist?: Nullable<CreateArtist>): Nullable<Artist> | Promise<Nullable<Artist>>;
    updateArtist(id: string, artist?: Nullable<UpdateArtist>): Nullable<Artist> | Promise<Nullable<Artist>>;
    deleteArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    createBand(band?: Nullable<CreateBand>): Nullable<Band> | Promise<Nullable<Band>>;
    updateBand(id: string, band?: Nullable<UpdateBand>): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    addTrackToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addBandToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addArtistToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addGenreToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    createGenre(genre?: Nullable<CreateGenre>): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    updateGenre(id: string, genre?: Nullable<UpdateGenre>): Nullable<Genre> | Promise<Nullable<Genre>>;
    createTrack(track?: Nullable<CreateTrack>): Nullable<Track> | Promise<Nullable<Track>>;
    updateTrack(id: string, track?: Nullable<UpdateTrack>): Nullable<Track> | Promise<Nullable<Track>>;
    deleteTrack(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    register(user?: Nullable<RegisterUser>): Nullable<User> | Promise<Nullable<User>>;
}

export interface Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<string>;
}

export interface ArtistData {
    items?: Nullable<Nullable<Artist>[]>;
    offset?: Nullable<number>;
    limit?: Nullable<number>;
    total?: Nullable<number>;
}

export interface Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface BandsData {
    items?: Nullable<Nullable<Band>[]>;
    offset?: Nullable<number>;
    limit?: Nullable<number>;
    total?: Nullable<number>;
}

export interface Member {
    artist: Artist;
    instrument?: Nullable<string>;
    years?: Nullable<string>;
}

export interface Favourites {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}

export interface FavouritesResponse {
    userId?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    artistsIds?: Nullable<Nullable<string>[]>;
    tracksIds?: Nullable<Nullable<string>[]>;
}

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface GenresData {
    items?: Nullable<Nullable<Genre>[]>;
    limit?: Nullable<number>;
    offset?: Nullable<number>;
    total?: Nullable<number>;
}

export interface Track {
    id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface TrackData {
    items?: Nullable<Nullable<Track>[]>;
    offset?: Nullable<number>;
    limit?: Nullable<number>;
    total?: Nullable<number>;
}

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    favouriteArtistIds?: Nullable<Nullable<string>[]>;
    favouriteSongsIds?: Nullable<Nullable<string>[]>;
    favouriteBandsIds?: Nullable<Nullable<string>[]>;
    favouriteGenresIds?: Nullable<Nullable<string>[]>;
}

export interface JWT {
    jwt: string;
}

type Nullable<T> = T | null;


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Paginate {
    limit?: Nullable<number>;
    offset?: Nullable<number>;
}

export interface CreateArtist {
    firstName: string;
    secondName: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country: string;
    bands?: Nullable<Nullable<string>[]>;
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
    bands?: Nullable<Nullable<CreateBand>[]>;
    instruments?: Nullable<string>;
}

export interface CreateBand {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<GenreInput>[]>;
}

export interface UpdateBand {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<GenreInput>[]>;
}

export interface MemberInput {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<string>;
}

export interface GenreInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
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

export interface Artist {
    _id: string;
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

export interface IQuery {
    getAllArtists(Paginate?: Nullable<Paginate>): Nullable<ArtistData> | Promise<Nullable<ArtistData>>;
    getByIdArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    getAllBands(Paginate?: Nullable<Paginate>): Nullable<BandsData> | Promise<Nullable<BandsData>>;
    getByIdBand(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    getUser(id: string): Nullable<User> | Promise<Nullable<User>>;
    login(login: Login): Nullable<JWT> | Promise<Nullable<JWT>>;
}

export interface IMutation {
    createArtist(artist?: Nullable<CreateArtist>): Nullable<Artist> | Promise<Nullable<Artist>>;
    updateArtist(id: string, artist?: Nullable<UpdateArtist>): Nullable<Artist> | Promise<Nullable<Artist>>;
    deleteArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    createBand(band?: Nullable<CreateBand>): Nullable<Band> | Promise<Nullable<Band>>;
    updateBand(id: string, band?: Nullable<UpdateBand>): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    register(user?: Nullable<RegisterUser>): Nullable<User> | Promise<Nullable<User>>;
}

export interface Band {
    _id: string;
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
    artist?: Nullable<string>;
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

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface PaginatedResponse {
    items?: Nullable<Nullable<Artist>[]>;
    offset?: Nullable<number>;
    limit?: Nullable<number>;
    total?: Nullable<number>;
}

export interface Track {
    id: string;
    title: string;
    albums?: Nullable<Nullable<Album>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
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

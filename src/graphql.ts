
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateArtistInput {
    firstName: string;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<BandInput>[]>;
    instruments?: Nullable<string>;
}

export interface UpdateArtistInput {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<BandInput>[]>;
    instruments?: Nullable<string>;
}

export interface BandInput {
    name: string;
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

export interface IQuery {
    artists(limit?: Nullable<number>): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    getUser(id: string): Nullable<User> | Promise<Nullable<User>>;
    login(login: Login): Nullable<JWT> | Promise<Nullable<JWT>>;
}

export interface IMutation {
    createArtist(input?: Nullable<CreateArtistInput>): Nullable<Artist> | Promise<Nullable<Artist>>;
    updateArtist(id: string, input?: Nullable<UpdateArtistInput>): Nullable<Artist> | Promise<Nullable<Artist>>;
    register(user?: Nullable<RegisterUser>): Nullable<User> | Promise<Nullable<User>>;
}

export interface Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
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

export interface PaginatedReponse {
    items?: Nullable<Nullable<Genre>[]>;
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

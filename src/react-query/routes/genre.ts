import baseApi from "../api"

type GenreObject = {
    id: number
    name: string
}

export type GenresApi = {
    genres: GenreObject[]
}

export const getGenres = () => baseApi.get<GenresApi>('/genre/movie/list')
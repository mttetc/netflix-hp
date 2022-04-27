import baseApi from "../api"

export type Video = {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: string
    id: string
}

export type MovieVideosApi = {
    id: number
    results: Video[]
}
export type GetMovieVideosParams = {
    movie_id: number
}

export const getMovieVideos = (params?: GetMovieVideosParams) => baseApi.get<MovieVideosApi>(`/movie/${params?.movie_id}/videos`)
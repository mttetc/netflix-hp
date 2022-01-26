
import baseApi from "../api"
import { PaginatedApiResponse } from "../types/api"

export type TrendingApi = {
    poster_path: string | null
    adult: boolean
    overview: string
    release_date: string
    genre_ids: number[]
    id: number
    original_title: string
    original_language: string
    title: string
    backdrop_path: string | null
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}

export type GetTrendingParams = {
    media_type: 'all' | 'movie' | 'tv' | 'person'
    time_window: 'day' | 'week'
}

export const getTrending = (params?: GetTrendingParams) => baseApi.get<PaginatedApiResponse<TrendingApi[]>>(`/trending/${params?.media_type}/${params?.time_window}`, { params })
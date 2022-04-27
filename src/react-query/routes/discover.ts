
import baseApi from "../api";
import { PaginatedApiResponse } from "../types/api";

type SortBy = 'popularity.desc' | 'popularity.asc' | 'release_date.asc' | 'release_date.desc' | 'revenue.asc' | 'revenue.desc' | 'primary_release_date.asc' | 'primary_release_date.desc' | 'original_title.desc' | 'original_title.asc' | 'vote_average.asc' | 'vote_average.desc' | 'vote_count.asc' | 'vote_count.dsc'

export type DiscoverApi = {
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

export type GetDiscoversParams = Partial<{
    language: string
    region: string
    sort_by: SortBy
    certification_country: string
    certification: string
    'certification.lte': string
    'certification.gte': string
    include_adult: boolean
    include_video: boolean
    page: number
    primary_release_year: number
    'primary_release_date.gte': string
    'primary_release_date.lte': string
    'release_date.gte': string
    'release_date.lte': string
    with_release_type: number
    year: number
    'vote_count.gte': string
    'vote_count.lte': string
    'vote_average.gte': string
    'vote_average.lte': string
    with_cast: string
    with_crew: string
    with_people: string
    with_companies: string
    with_genres: string
    without_genres: string
    with_keywords: string
    without_keywords: string
    'with_runtime.gte': string
    'with_runtime.lte': string
    with_original_language: string
    with_watch_providers: string
    watch_region: string
    with_watch_monetization_types: string
    without_companies: string

}>

export const getDiscovers = (params?: GetDiscoversParams) => baseApi.get<PaginatedApiResponse<DiscoverApi[]>>('/discover/movie', { params })
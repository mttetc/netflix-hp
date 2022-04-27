import { QueryParams, useEntityQuery } from '../../hooks/useEntityQuery'
import { getTrending, GetTrendingParams, TrendingApi } from '../../routes/trending'
import { PaginatedApiResponse } from '../../types/api'
import { Trending } from './types'

export const useTrending = (params?: QueryParams<PaginatedApiResponse<Trending[]>, GetTrendingParams, PaginatedApiResponse<TrendingApi[]>>) =>
  useEntityQuery({
    key: 'trending',
    apiRoute: getTrending,
    ...params
  })
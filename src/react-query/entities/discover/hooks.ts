import { QueryParams, useEntityQuery } from '../../hooks/useEntityQuery'
import { DiscoverApi, getDiscovers, GetDiscoversParams } from '../../routes/discover'
import { PaginatedApiResponse } from '../../types/api'
import { Discover } from './types'

export const useDiscovers = (params?: QueryParams<PaginatedApiResponse<Discover[]>, GetDiscoversParams, PaginatedApiResponse<DiscoverApi[]>>) =>
    useEntityQuery({
        key: 'discover',
        apiRoute: getDiscovers,
        ...params
    })
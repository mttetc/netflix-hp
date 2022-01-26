import { QueryParams, useEntityQuery } from '../../hooks/useEntityQuery'
import { GenresApi, getGenres } from '../../routes/genre'
import { Genres } from './types'

export const useGenres = (params?: QueryParams<Genres, never, GenresApi>) =>
    useEntityQuery({
        key: 'genre',
        apiRoute: getGenres,
        ...params
    })
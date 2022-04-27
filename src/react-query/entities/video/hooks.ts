import { QueryParams, useEntityQuery } from '../../hooks/useEntityQuery'
import { getMovieVideos, GetMovieVideosParams, MovieVideosApi } from '../../routes/video'
import { MovieVideos } from './types'

export const useMovieVideos = (params?: QueryParams<MovieVideos, GetMovieVideosParams, MovieVideosApi>) =>
    useEntityQuery({
        key: 'movie-video',
        apiRoute: getMovieVideos,
        ...params
    })
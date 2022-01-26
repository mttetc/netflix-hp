import { Box } from '@chakra-ui/react'
import React from 'react'
import { useGenres } from '../../../../react-query/entities/genre/hooks'
import { GenreTitle } from '../GenreTitle/GenreTitle'
import { MovieSection as MovieSectionProps } from '../MoviesSections/MoviesSections.services'
import { MovieThumbs } from '../MovieThumbs/MovieThumbs'

export const MovieSection = ({ id, data }: MovieSectionProps) => {
    const { data: genres } = useGenres({ queryParams: { enabled: false } })

    if (!genres) return null

    const genreTitle = genres.genres.find((genre) => genre.id === id)?.name

    return (
        <Box pb={10} data-testid={id}>
            {genreTitle && <GenreTitle title={genreTitle} />}
            <MovieThumbs movies={data} />
        </Box>
    )
}
import { Box } from '@chakra-ui/react'
import React from 'react'
import { Title } from '../../../../components/Title/Title'
import { useDiscovers } from '../../../../react-query/entities/discover/hooks'
import { useGenres } from '../../../../react-query/entities/genre/hooks'
import { MovieThumbs } from '../MovieThumbs/MovieThumbs'
import { moviesSectionsServices, MovieSection as MovieSectionProps } from './MoviesSections.services'

const { getMoviesSections } = moviesSectionsServices

export const MoviesSections = () => {
    const { data: discovers } = useDiscovers()

    if (!discovers) return null

    const moviesSections = getMoviesSections(discovers)

    return <>{moviesSections.map((section) => <MovieSection key={section.id} {...section} />)}</>
}


const MovieSection = ({ id, data }: MovieSectionProps) => {
    const { data: genres } = useGenres({ queryParams: { enabled: false } })

    if (!genres) return null

    const genreTitle = genres.genres.find((genre) => genre.id === id)?.name

    return (
        <Box pb={10} data-testid={id}>
            {genreTitle && <Title title={genreTitle} />}
            <MovieThumbs movies={data} />
        </Box>
    )
}
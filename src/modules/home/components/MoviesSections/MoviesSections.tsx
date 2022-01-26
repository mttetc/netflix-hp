import React from 'react'
import { useDiscovers } from '../../../../react-query/entities/discover/hooks'
import { MovieSection } from '../MovieSection/MovieSection'
import { moviesSectionsServices } from './MoviesSections.services'

const { getMoviesSections } = moviesSectionsServices

export const MoviesSections = () => {
    const { data: discovers } = useDiscovers()

    if (!discovers) return null

    const moviesSections = getMoviesSections(discovers)

    return <>{moviesSections.map((section) => <MovieSection key={section.id} {...section} />)}</>
}
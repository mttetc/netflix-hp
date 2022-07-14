import React from 'react'
import { MoviesSections } from './MoviesSections/MoviesSections'
import { Trending } from './Trending/Trending'

export const Home = () => {
    return (
        <>
            <Trending />
            <MoviesSections />
        </>
    )
}
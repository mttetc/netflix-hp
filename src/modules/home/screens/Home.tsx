import React from 'react'
import { MoviesSections } from '../components/MoviesSections/MoviesSections'
import { Trending } from '../components/Trending/Trending'

export const Home = () => {
    return (
        <>
            <Trending />
            <MoviesSections />
        </>
    )
}
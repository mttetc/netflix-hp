import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useConfiguration } from '../../../react-query/entities/configuration/hooks'
import { useTrending } from '../../../react-query/entities/trending/hooks'
import { BackdropSizes } from '../../../react-query/routes/configuration'
import { getImageUrl } from '../../../utils/imageUrl'
import { getRandomItem } from '../../../utils/randomItem'
import { MovieVideos } from '../MovieVideos/MovieVideos'

export const Trending = () => {
    const { data: trendingMovies } = useTrending({ params: { media_type: 'movie', time_window: 'day' } })
    const { data: configuration } = useConfiguration({ queryParams: { enabled: false } })

    if (!trendingMovies || !configuration) return null

    const { title, backdrop_path, id } = getRandomItem(trendingMovies.results)
    const backdropUrl = backdrop_path ? getImageUrl<BackdropSizes>({ baseUrl: configuration.images.base_url, size: 'original', path: backdrop_path }) : ''

    return (
        <Flex
            h="56.25vw"
            maxH="90vh"
            w="full"
            backgroundImage={backdropUrl}
            backgroundSize="cover"
            backgroundColor="black"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            p={10}
            alignItems="center"
            position="relative"
            _after={{
                content: "''",
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(23,25,35,1) 100%)',
                height: '10vw',
                maxHeight: '200px'
            }}>
            <Heading color="white" textShadow="2px 3px 5px rgba(0,0,0,0.5);" size="4xl">{title}</Heading>

            <MovieVideos id={id} />
        </Flex>
    )
}
import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import SwiperCore, {
    Keyboard, Navigation
} from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useConfiguration } from '../../../../react-query/entities/configuration/hooks';
import { Discover } from '../../../../react-query/entities/discover/types';
import { BackdropSizes } from '../../../../react-query/routes/configuration';
import { getImageUrl } from '../../../../tools/imageUrl';

SwiperCore.use([Keyboard, Navigation]);

export const MovieThumbs = ({ movies }: { movies: Discover[] }) => {
    return (
        <Box px={10}>
            <Swiper
                spaceBetween={10}
                slidesPerView={6}
                slidesPerGroup={6}
                keyboard={{
                    "enabled": true
                }}
                navigation
                lazy

            >
                {movies.map(({ id, backdrop_path }) =>
                    <SwiperSlide key={id} >
                        <MovieThumb backdropPath={backdrop_path} />
                    </SwiperSlide>
                )}
            </Swiper>
        </Box>
    )
}

const MovieThumb = ({ backdropPath }: { backdropPath: string | null }) => {
    const { data: configuration } = useConfiguration({ queryParams: { enabled: false } })

    if (!configuration) return null

    const posterUrl = backdropPath ? getImageUrl<BackdropSizes>({ baseUrl: configuration.images.base_url, size: 'w780', path: backdropPath }) : ''

    return <Image transition="transform .1s linear" src={posterUrl} borderRadius={4} _hover={{ transform: 'scale(1.1)' }} w="full" />
}
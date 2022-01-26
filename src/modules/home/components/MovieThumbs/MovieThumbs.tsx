import { Box } from '@chakra-ui/react';
import React from 'react';
import SwiperCore, {
    Keyboard, Navigation
} from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Discover } from '../../../../react-query/entities/discover/types';
import { MovieThumb } from '../MovieThumb/MovieThumb';

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
import { Box, Fade } from '@chakra-ui/react'
import React, { useMemo, useRef, useState } from 'react'
import Youtube from 'react-youtube'
import { useMovieVideos } from '../../../react-query/entities/video/hooks'
import { getRandomItem } from '../../../utils/randomItem'

export const MovieVideos = ({ id }: { id: number }) => {
    const [showVideo, setShowVideo] = useState(false)
    const { data: movieVideos } = useMovieVideos({ params: { movie_id: id } })
    const randomVideo = movieVideos?.results && getRandomItem(movieVideos.results)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const videoKey = useMemo(() => randomVideo && randomVideo.key, [movieVideos]);
    const ref = useRef<HTMLDivElement | null>(null)
    const videos = movieVideos?.results

    if (!movieVideos || !videos || videos.length === 0 || !videoKey) return null

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            fs: 0,
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
        } as const,
    };

    return (
        <Box
            ref={ref}
            position="absolute"
            left="0"
            right="0"
            bottom="0"
            top="0"
            sx={{
                '*': {
                    height: '100%'
                }
            }}>
            <Fade in={showVideo}>
                <Youtube
                    videoId={videoKey}
                    opts={opts}
                    onPause={() => setShowVideo(false)}
                    onPlay={() => setShowVideo(true)}
                    onReady={() => setShowVideo(true)}
                    onEnd={() => setShowVideo(false)}
                />
            </Fade>
        </Box>
    )
}
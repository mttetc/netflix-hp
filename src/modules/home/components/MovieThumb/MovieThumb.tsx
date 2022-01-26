import { Image } from '@chakra-ui/react'
import React from 'react'
import { useConfiguration } from '../../../../react-query/entities/configuration/hooks'
import { BackdropSizes, PosterSizes } from '../../../../react-query/routes/configuration'
import { getImageUrl } from '../../../../tools/imageUrl'

export const MovieThumb = ({ backdropPath }: { backdropPath: string | null }) => {
    const { data: configuration } = useConfiguration({ queryParams: { enabled: false } })

    if (!configuration) return null

    const posterUrl = backdropPath ? getImageUrl<BackdropSizes>({ baseUrl: configuration.images.base_url, size: 'w780', path: backdropPath }) : ''

    return <Image transition="transform .1s linear" src={posterUrl} borderRadius={4} _hover={{ transform: 'scale(1.1)' }} w="full" />
}
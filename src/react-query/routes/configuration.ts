import baseApi from "../api"

export type BackdropSizes = 'w300' | 'w780' | 'w1280' | 'original'
export type LogoSizes = 'w45' | 'w92' | 'w154' | 'w185' | 'w300' | 'w500' | 'original'
export type PosterSizes = 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original'
export type ProfileSizes = 'w45' | 'w185' | 'h632' | 'original'
export type StillSizes = 'w92' | 'w185' | 'w300' | 'original'

export type ConfigurationApi = {
    images: {
        base_url: string
        secure_base_url: string
        backdrop_sizes: BackdropSizes[]
        logo_sizes: LogoSizes[]
        poster_sizes: PosterSizes[]
        profile_sizes: ProfileSizes[]
        still_sizes: StillSizes[]
    }
    change_keys: string[]
}

export const getConfiguration = () => baseApi.get<ConfigurationApi>('/configuration')
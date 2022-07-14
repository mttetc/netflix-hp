import { filter, flatMap, map, uniq } from 'remeda'
import { DiscoverApi } from "../../../react-query/routes/discover"
import { PaginatedApiResponse } from "../../../react-query/types/api"

export type MovieSection = { id: number, data: DiscoverApi[] }

const getDiscoversByGenre = ({ genreIds, discovers }: { genreIds: number[], discovers: DiscoverApi[] }): MovieSection[] => {
    const sections = map(genreIds, (id) => ({
        id,
        data: filter(discovers, (discover) => discover.genre_ids.includes(id))
    }))

    return sections
}

const getFilteredGenreIds = (genreIds: number[]) => uniq(genreIds)

const getFlattenedGenreIds = (discoversResults: DiscoverApi[]) => flatMap(discoversResults, ({ genre_ids }) => genre_ids)

const getMoviesSections = (discovers: PaginatedApiResponse<DiscoverApi[]>) => {
    const flattenedGenreIds = getFlattenedGenreIds(discovers.results)
    const filteredGenreIds = getFilteredGenreIds(flattenedGenreIds)
    const discoversByGenre = getDiscoversByGenre({ genreIds: filteredGenreIds, discovers: discovers.results })

    return discoversByGenre

}

export const moviesSectionsServices = {
    getMoviesSections
}
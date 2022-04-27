import { useConfiguration } from "../react-query/entities/configuration/hooks"
import { useGenres } from "../react-query/entities/genre/hooks"

export const useInit = () => {
    const { isLoading: isLoadingConfiguration } = useConfiguration()
    const { isLoading: isLoadingGenres } = useGenres()

    return { isLoading: isLoadingConfiguration || isLoadingGenres }
}
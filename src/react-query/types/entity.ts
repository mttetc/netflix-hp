import { Configuration } from "../entities/configuration/types";
import { Discover } from "../entities/discover/types";
import { Genres } from "../entities/genre/types";
import { Trending } from "../entities/trending/types";
import { MovieVideos } from "../entities/video/types";

export type QueryKeyEntity = {
    configuration: Configuration
    discover: Discover,
    genre: Genres
    trending: Trending
    'movie-video': MovieVideos
}
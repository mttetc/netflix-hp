import { DiscoverApi } from '../../../../react-query/routes/discover'
import { PaginatedApiResponse } from '../../../../react-query/types/api'
import { moviesSectionsServices } from './MoviesSections.services'

const { getMoviesSections } = moviesSectionsServices

const fakeDiscovers: PaginatedApiResponse<DiscoverApi[]> = {
    page: 1,
    results: [
        {
            adult: false,
            backdrop_path: "/xQdPoQuEOoSpT1cRrc8Gbt7leWG.jpg",
            genre_ids: [28],
            id: 634649,
            original_language: "en",
            original_title: "Spider-Man: No Way Home",
            overview: "Après les évènements liés à l'affrontement avec Mystério, l'identité secrète de Spider-Man a été révélée. Il est poursuivi par le gouvernement américain, qui l'accuse du meurtre de Mystério, et est traqué par les médias. Cet évènement a également des conséquences terribles sur la vie de sa petite-amie M. J. et de son meilleur ami Ned. Désemparé, Peter Parker demande alors de l'aide au Docteur Strange. Ce dernier lance un sort pour que tout le monde oublie que Peter est Spider-Man. Mais les choses ne se passent pas comme prévu et cette action altère la stabilité de l'espace-temps. Cela ouvre le « Multivers », un concept terrifiant dont ils ne savent quasiment rien.",
            popularity: 9425.322,
            poster_path: "/3SyG7dq2q0ollxJ4pSsrqcfRmVj.jpg",
            release_date: "2021-12-15",
            title: "Spider-Man: No Way Home",
            video: false,
            vote_average: 8.5,
            vote_count: 5898
        }, {
            adult: false,
            backdrop_path: "/k2twTjSddgLc1oFFHVibfxp2kQV.jpg",
            genre_ids: [28],
            id: 524434,
            original_language: "en",
            original_title: "Eternals",
            overview: "Depuis l’aube de l’humanité, les Éternels, un groupe de héros venus des confins de l’univers, protègent la Terre. Lorsque les Déviants, des créatures monstrueuses que l’on croyait disparues depuis longtemps, réapparaissent mystérieusement, les Éternels sont à nouveau obligés de se réunir pour défendre l’humanité…",
            popularity: 7590.729,
            poster_path: "/vV7TrS7PNRZJHCxNmiYN1SU7s1w.jpg",
            release_date: "2021-11-03",
            title: "Les Éternels",
            video: false,
            vote_average: 7.3,
            vote_count: 3513
        }, {
            adult: false,
            backdrop_path: "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
            genre_ids: [12],
            id: 585083,
            original_language: "en",
            original_title: "Hotel Transylvania: Transformania",
            overview: "Johnny est dépité car, en plus d'avoir gâché la fête d'anniversaire de son beau-père Dracula, il pense qu'il ne l'aime pas car il n'est pas un monstre. Van Helsing peut l'aider : grâce à son \"rayon Monstrificateur\" il transforme Johnny en dragon ! Mais le rayon se détraque, touche les monstres de l'hôtel y compris Dracula, et les transforme en humains !!! Ils vont devoir sillonner la planète en quête d'un remède pour inverser la mutation avant qu'il ne soit trop tard... et que ces transformations ne deviennent définitives !",
            popularity: 6951.326,
            poster_path: "/yFwFp5QVHazxTklKGiJ0G59pVab.jpg",
            release_date: "2022-01-13",
            title: "Hôtel Transylvanie : Changements monstres",
            video: false,
            vote_average: 7.7,
            vote_count: 1111
        }
    ],
    total_pages: 2,
    total_results: 3
}

describe('test movies sections format functions', () => {
    it('should return formatted movies section by genre when function is given discovers api response', () => {
        const result = getMoviesSections(fakeDiscovers)

        expect(result).toStrictEqual([
            {
                id: 28,
                data: [
                    {
                        adult: false,
                        backdrop_path: "/xQdPoQuEOoSpT1cRrc8Gbt7leWG.jpg",
                        genre_ids: [28],
                        id: 634649,
                        original_language: "en",
                        original_title: "Spider-Man: No Way Home",
                        overview: "Après les évènements liés à l'affrontement avec Mystério, l'identité secrète de Spider-Man a été révélée. Il est poursuivi par le gouvernement américain, qui l'accuse du meurtre de Mystério, et est traqué par les médias. Cet évènement a également des conséquences terribles sur la vie de sa petite-amie M. J. et de son meilleur ami Ned. Désemparé, Peter Parker demande alors de l'aide au Docteur Strange. Ce dernier lance un sort pour que tout le monde oublie que Peter est Spider-Man. Mais les choses ne se passent pas comme prévu et cette action altère la stabilité de l'espace-temps. Cela ouvre le « Multivers », un concept terrifiant dont ils ne savent quasiment rien.",
                        popularity: 9425.322,
                        poster_path: "/3SyG7dq2q0ollxJ4pSsrqcfRmVj.jpg",
                        release_date: "2021-12-15",
                        title: "Spider-Man: No Way Home",
                        video: false,
                        vote_average: 8.5,
                        vote_count: 5898
                    },
                    {
                        adult: false,
                        backdrop_path: "/k2twTjSddgLc1oFFHVibfxp2kQV.jpg",
                        genre_ids: [28],
                        id: 524434,
                        original_language: "en",
                        original_title: "Eternals",
                        overview: "Depuis l’aube de l’humanité, les Éternels, un groupe de héros venus des confins de l’univers, protègent la Terre. Lorsque les Déviants, des créatures monstrueuses que l’on croyait disparues depuis longtemps, réapparaissent mystérieusement, les Éternels sont à nouveau obligés de se réunir pour défendre l’humanité…",
                        popularity: 7590.729,
                        poster_path: "/vV7TrS7PNRZJHCxNmiYN1SU7s1w.jpg",
                        release_date: "2021-11-03",
                        title: "Les Éternels",
                        video: false,
                        vote_average: 7.3,
                        vote_count: 3513
                    }
                ]
            },
            {
                id: 12,
                data: [
                    {
                        adult: false,
                        backdrop_path: "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
                        genre_ids: [12],
                        id: 585083,
                        original_language: "en",
                        original_title: "Hotel Transylvania: Transformania",
                        overview: "Johnny est dépité car, en plus d'avoir gâché la fête d'anniversaire de son beau-père Dracula, il pense qu'il ne l'aime pas car il n'est pas un monstre. Van Helsing peut l'aider : grâce à son \"rayon Monstrificateur\" il transforme Johnny en dragon ! Mais le rayon se détraque, touche les monstres de l'hôtel y compris Dracula, et les transforme en humains !!! Ils vont devoir sillonner la planète en quête d'un remède pour inverser la mutation avant qu'il ne soit trop tard... et que ces transformations ne deviennent définitives !",
                        popularity: 6951.326,
                        poster_path: "/yFwFp5QVHazxTklKGiJ0G59pVab.jpg",
                        release_date: "2022-01-13",
                        title: "Hôtel Transylvanie : Changements monstres",
                        video: false,
                        vote_average: 7.7,
                        vote_count: 1111
                    }
                ]
            }
        ])
    })
})
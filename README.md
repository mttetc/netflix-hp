# Test Netflix

Ce test contient deux parties indépendantes:
- une partie **frontend** qui consiste à reproduire l'interface de Netflix en React et Typescript
- une partie **backend** optionnelle qui consiste à gérer une API de films favoris

Nous prendrons en compte dans notre debrief du test:
- La lisibilité, l'atomicité et la robustesse du code
- Le soin apporté aux quelques tests demandés
- La fluidité de l'interface
- L'optimisation des requêtes d'API
- L'experience utilisateur

Nous n'évaluerons pas:
- La couverture de tests

Le rendu du test est demandé sous la forme d'un fork privé de ce dépot dans lequel vous pourrez inviter @maximelebastard, @cchevallscoppe et @Webini. Le test est censé prendre entre 2 et 4 heures. Si vous n'avez pas pu terminer certaines choses ou que vous avez eu des idées que vous n'avez pas eu le temps de mettre en place - n'hésitez surtout pas à nous le préciser dans votre README.md

## Partie Frontend

En utilisant l'[API TMDB](https://developers.themoviedb.org/3/getting-started/introduction), on réalisera une page semblable à l'accueil de Netflix.

La partie haute affichera un film (movie) populaire (trending) sélectionné au hasard dans l'API.

La suite de la page affichera:
- Une section pour chaque genre (genre) de l'API
- Dans chaque section, la liste des films (movies) du genre
- Il doit être possible de faire défiler les films horizontalement
- Rien n'est demandé au clic sur un film.

L'architecture du code et les outils sont libres. Seules contraintes: React et Typescript.

Nous vous demandons de tester un composant React de votre choix, avec les outils de votre choix. Le but est de voir un test et de discuter de la méthode, nous n'évaluerons pas le coverage du projet.

## Partie Backend

Réaliser en node une API GraphQL permettant de:

- Enregistrer en favori un identifiant des movie TMDB
- Récupérer tous les identifiants de movies TMDB

Pour stocker les données, on utilisera au choix LowDB ou un serveur MongoDB Dockerisé.

Permettre dans le frontend d'enregistrer des films favoris.

Nous vous demandons de tester unitairement un fichier au choix, avec l'outil de votre choix. Le but est de voir un test et de discuter de la méthode, nous n'évaluerons pas le coverage du projet.

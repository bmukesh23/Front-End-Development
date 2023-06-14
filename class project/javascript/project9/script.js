'use strict';

const tmdbApiKey = '7a0cd0a9d9d2ae4108ec977ad3b325a4';

// const trendingUrl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=';

const movieDataCont = document.querySelector('.movie_data_container');
const moviePosterCont = document.querySelector('.movie_poster_container');
const movieOverview = document.querySelector('.movie_overview');
const releaseDate = document.getElementById('release_date');
const leadCast = document.getElementById('lead_cast');
const moreMovies1 = document.getElementById('more_movies--1');
const moreMovies2 = document.getElementById('more_movies--2');

const errorCont = document.querySelector('.error_container');
const errorMsg = document.querySelector('.error_message');

const displayMoviesBtn = document.getElementById('trending_button--display');
const coordinatesBtn = document.getElementById('trending_button--coordinates');

// Additional functionalities related code:

// The scrolling-in animation of the movie-title:
moviePosterCont.addEventListener('mouseenter', e => {
    moviePosterCont.classList.remove('animate_out');
    moviePosterCont.classList.add('animate_in');
});

moviePosterCont.addEventListener('mouseleave', e => {
    moviePosterCont.classList.remove('animate_in');
    moviePosterCont.classList.add('animate_out');
});

// Truncating to fit: Populate an element with text so as to fit into height (we usually use library for this).
const truncate = function (elt, content, height) {
    function getHeight(elt) {
        return elt.getBoundingClientRect().height;
    }
    function shorten(str) {
        return str.slice(0, -1);
    }

    elt.style.height = 'auto';
    elt.textContent = content;

    // Shorten the string until it fits vertically.
    while (getHeight(elt) > height && content) {
        elt.textContent = (content = shorten(content)) + '...';
    }
};







const trendingUrl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=';

const customFetch = function (url, errorMessage) {
    return fetch(url).then(function (response) {
        if (!response.ok) throw new Error(`${errorMessage} ${response.status}`);
        return response.json();
    });
};

const displayErrorInUI = function (errMsg) {
    errorMsg.textContent = errMsg;
    errorCont.classList.remove('container_hidden');
};

const displayTrendingMovies = function () {
    customFetch(
        `${trendingUrl}${tmdbApiKey}`,
        'failed to make a request for fetching trending movies'
    )
        .then(function (data) {
            const { results } = data;
            const [firstTrendingMovie] = results;

            moviePosterCont.dataset.title = firstTrendingMovie.title;
            moviePosterCont.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${firstTrendingMovie.poster_path})`;
            truncate(
                movieOverview,
                firstTrendingMovie.overview,
                Math.floor((window.innerHeight * 30) / 100)
            );

            releaseDate.textContent = firstTrendingMovie.release_date;

            return customFetch(
                `https://api.themoviedb.org/3/movie/${firstTrendingMovie.id}/credits?api_key=${tmdbApiKey}`,
                'failed to make a request for lead cast'
            );
        })
        .then(data => {
            const { cast } = data;
            const [firstCast, secondCast] = cast;
            leadCast.textContent = `${firstCast.name}, ${secondCast.name}`;

            return customFetch(
                `https://api.themoviedb.org/3/person/${firstCast.id}/movie_credits?api_key=${tmdbApiKey}`,
                'failed to make a request for more movies from the cast'
            );
        })
        .then(data => {
            const { cast } = data;
            const [firstMovie, secondMovie] = cast;
            moreMovies1.textContent = firstMovie.original_title;
            moreMovies2.textContent = secondMovie.original_title;

            movieDataCont.classList.remove('container_hidden');
        })
        .catch(function (error) {
            console.error(error);

            const customMessage = `Error occurred when displaying the trending movie. The error is: ${error.message}`;

            displayErrorInUI(customMessage);
        })
        // .finally(function () {
        //     console.log('This will be executed no matter if the error occurs or not');
        // });
};

displayMoviesBtn.addEventListener('click', displayTrendingMovies);

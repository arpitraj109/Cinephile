import React, { useState, useEffect, useCallback } from 'react';
import MovieCard from '../Movie/MovieCard';
import './Search.css';

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [timeoutId, setTimeoutId] = useState(null);

    // Function to fetch movies from API
    const searchMovie = useCallback((name = '') => {
        fetch(`https://api.themoviedb.org/3/${name ? "search/movie" : "movie/upcoming"}?api_key=dfac79bf601a1c8766457c868e28203e&language=en-US&query=${name}`)
            .then(res => res.json())
            .then(data => setMovies(data.results || [])) // Handle case where no results are returned
            .catch(error => console.error("Error fetching movies:", error));
    }, []);

    // Handle search input change with debounce
    const handleOnChange = (e) => {
        const searchTerm = e.target.value;
        setQuery(searchTerm);

        // Clear previous timeout to prevent too many API calls
        if (timeoutId) clearTimeout(timeoutId);

        const newTimeout = setTimeout(() => {
            searchMovie(searchTerm);
        }, 500); // Debounce delay

        setTimeoutId(newTimeout);
    };

    // Initial movie fetch
    useEffect(() => {
        searchMovie();
    }, [searchMovie]);

    return (
        <>
            {/* Search Input */}
            <div className="main-search">
                <input
                    type="search"
                    value={query}
                    onChange={handleOnChange}
                    className="input-search"
                    placeholder="Search movies..."
                />
            </div>

            {/* Movie List */}
            <div className="list-cards">
                {movies.length === 0 ? (
                    <h1>No Results Found</h1>
                ) : (
                    movies.map(movie => <MovieCard movie={movie} key={movie.id} />)
                )}
            </div>
        </>
    );
};

export default Search;

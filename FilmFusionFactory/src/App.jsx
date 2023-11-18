import React, { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import "./css/App.css"
import MovieCard from "./MovieCard";
import Footer from "./components/Footer";


const api_url = 'http://www.omdbapi.com?apikey=ff5d1251';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const searchMovies = async (title, page) => {
    try {
      const fetching = await fetch(`${api_url}&s=${title}&page=${page}`);
      const data = await fetching.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
        setTotalPages(Math.ceil(Number(data.totalResults) / 10 )); 
      } else {
        setMovies([]);
        setTotalPages(0);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    searchMovies(searchTerm, newPage);
  };

  useEffect(() => {
    // Initially, search for an empty string to show no movies found message
    searchMovies('', currentPage);
  }, [currentPage]);

  return (
    <div className="app">
      
      <h1><span className="threeF">F</span>ilm<span className="threeF">F</span>usion<span className="threeF">F</span>actory</h1>
      <div className="search">
        <input
          placeholder=""
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm, currentPage)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
            ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Search for Movies, Series and even Games</h2>
        </div>
      )}
      <br />
      <div className="buttons">
            {currentPage > 1 && (
              <button className="previous-button" onClick={() => handlePageChange(currentPage - 1)}>Previous Page</button>
              )}
            {currentPage < totalPages && (
              <button className = "next-button" onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
              )} 
              </div>
              <br />
              <br />
              <br />
              <Footer/>      
    </div>  
    );
};

export default App;



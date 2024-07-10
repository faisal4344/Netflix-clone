import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './banner.css'; // Import the CSS file for styling

const Banner = () => {
  const [movie, setMovie] = useState({}); // State to store the fetched movie

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
      } catch (error) {
        console.error("error", error);
      }
    })()
},[]);

function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1 )+ '...' :str;
}

   return (
    <div className="banner" // Apply CSS class for styling
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/originals${movie?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="banner__contents">
        <h1 className="banner_title">
          {(movie?.title || movie?.name || movie?.original_name)}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
};

export default Banner;

import React, { useState, useEffect } from 'react';
import { Pane } from 'evergreen-ui';
import axios from 'axios';
import './App.css';
import { useParams } from 'react-router-dom';

export const MovieName = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const getMovieDetail = async () => {
    const response = await axios.get(
      'https://yts.mx/api/v2/movie_details.json',
      {
        params: {
          movie_id: params.id,
        },
      }
    );
    setMovieDetails(response.data.data.movie);
  };

  useEffect(() => {
    getMovieDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Pane clearfix>
      {movieDetails && <div>{movieDetails.title}</div>}
    </Pane>
  );
};

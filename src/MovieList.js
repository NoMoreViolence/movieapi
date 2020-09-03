import React from 'react';
import styled from 'styled-components';
import { MovieItem } from './MovieItem';
import './App.css';
export const MovieList = ({ movieItems, text, genres }) => {
  return (
    <ContainerRight>
      {movieItems &&
        movieItems
          .filter((movie) => {
            if (movie.title.toLowerCase().indexOf(text.toLowerCase()) > -1) {
              return true;
            }
            return false;
          })
          .filter((movieItem) => {
            if (genres.length === 0) {
              return true;
            }

            if (
              movieItem.genres.filter((val) => genres.indexOf(val) !== -1)
                .length === 0
            ) {
              return false;
            }
            return true;
          })
          .map((movieItem) => {
            return (
              <MovieItem
                key={movieItem.id}
                id={movieItem.id}
                title={movieItem.title}
                contents={movieItem.rating}
                src={movieItem.medium_cover_image}
              />
            );
          })}
    </ContainerRight>
  );
};

const ContainerRight = styled.div`
  background: none;
  width: 70%;
  height: 100%;
  float: right;
`;

import React from 'react';
import { Pane, StarIcon, Button } from 'evergreen-ui';
import { Route, Link } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import { MovieName } from './MovieName';

export const MovieItem = ({ id, title, contents, src }) => {
  console.log(id);
  return (
    <Pane
      elevation={3}
      float="left"
      width={280}
      height={500}
      overflow="scroll"
      margin={24}
      padding={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Route path="/MovieName" component={MovieName} />

      <img src={src} alt="영화썸네일"></img>
      <Header>{title}</Header>

      <Subhead height="600px" size={300}>
        <Display>
          <StarIcon size={12} color="#85a5ff" />
          {contents}
        </Display>
      </Subhead>
      <Button>
        <Link
          to={{
            pathname: `/MovieName/${id}`,
            state: {
              title,
              contents,
              src,
            },
          }}
        >
          상세보기
        </Link>
      </Button>
    </Pane>
  );
};

const Header = styled.span`
  font-size: 13px;
  text-align: center;
  padding: 12px 8px 4px 8px;
`;
const Subhead = styled.span`
  font-size: 18px;
  font-weight: bold;
  padding: 4px 24px;
  color: #4e7496;
`;
const Display = styled.div`
  display: contents;
`;

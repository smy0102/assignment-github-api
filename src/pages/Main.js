import React from 'react';
import RepositoryCard from '../components/RepositoryCard';
import styled from 'styled-components';
import { flexSet } from '../styles/mixin';

const Main = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <PageTitle>MY REPOSITORY</PageTitle>
        <div>
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
        </div>
      </ContentWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${flexSet}
`;

const ContentWrapper = styled.div`
  margin: 40px auto;
`;

const PageTitle = styled.h1`
  width: 60%;
  margin: 30px 0;
  font-size: 20px;
  font-weight: 800;
`;

export default Main;

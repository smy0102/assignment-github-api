import React, { useState, useEffect } from 'react';
import RepositoryCard from '../components/main/RepositoryCard';
import NoSubscription from '../components/main/NoSubscription';
import styled from 'styled-components';
import { flexSet } from '../styles/mixin';

const Main = () => {
  const [subscribeData, setSubscribeData] = useState();

  useEffect(() => {
    setSubscribeData(JSON.parse(localStorage.getItem('subscribe')));
  }, []);

  const handleUnsubscribe = event => {
    const filteredData = subscribeData.filter(
      data => data.id !== Number(event.target.id)
    );

    if (window.confirm('Do you want to unsubscribe?')) {
      localStorage.setItem('subscribe', JSON.stringify(filteredData));
      setSubscribeData(filteredData);
    }
  };

  return (
    <MainContainer>
      <ContentWrapper>
        <PageTitle>MY REPOSITORY</PageTitle>
        {subscribeData && subscribeData.length !== 0 ? (
          subscribeData.map(data => (
            <RepositoryCard
              key={data.id}
              data={data}
              handleUnsubscribe={handleUnsubscribe}
            />
          ))
        ) : (
          <NoSubscription />
        )}
      </ContentWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  ${flexSet}
  margin-top: 45px;
`;

const ContentWrapper = styled.div`
  width: 60%;
  margin: 20px auto;
`;

const PageTitle = styled.h1`
  margin: 30px 0;
  font-size: 20px;
  font-weight: 800;
`;

export default Main;

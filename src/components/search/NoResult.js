import React from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/mixin';

const NoResult = () => {
  return (
    <NoResultContainer>
      <LoupeImage />
      <Text>
        We couldn’t find any repositories
        <br /> matching 'SearchTerm'
      </Text>
    </NoResultContainer>
  );
};

const NoResultContainer = styled.div`
  ${flexSet('column', 'center', 'center')}
  padding: 70px 0;
`;

const LoupeImage = styled.div`
  width: 50px;
  height: 50px;
  background: center center / 100% url('icon/loupe.png');
  opacity: 0.4;
`;

const Text = styled.div`
  margin-top: 30px;
  color: ${props => props.theme.basicGray};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  text-align: center;
`;

export default NoResult;

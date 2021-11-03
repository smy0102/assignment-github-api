import React from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/mixin';

const Message = ({ imgUrl, text }) => {
  return (
    <NoResultContainer>
      <Image imageSrc={imgUrl} />
      <Text>{text}</Text>
    </NoResultContainer>
  );
};

const NoResultContainer = styled.div`
  ${flexSet('column', 'center', 'center')}
  margin-top: 50px;
`;

const Image = styled.div`
  width: 50px;
  height: 50px;
  background: center center / 100% url(${props => props.imageSrc});
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

export default Message;

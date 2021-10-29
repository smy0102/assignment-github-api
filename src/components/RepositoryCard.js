import React from 'react';
import styled from 'styled-components';
import { flexSet, buttonSet } from '../styles/mixin';

const RepositoryCard = () => {
  return (
    <CardContainer>
      <OwnerWrapper>
        <OwnerAvatar
          AvatarImg={`https://avatars.githubusercontent.com/u/35775?v=4`}
        />
        <OwnerLogin>our-record</OwnerLogin>
      </OwnerWrapper>
      <div>
        <Title>js-jquery-event-listeners-readme-bootcamp-prep-000</Title>
        <Description>
          Examples of how to do query, style, dom, ajax, event etc like jQuery
          with plain javascript.
        </Description>
        <div>
          <IssueButton>ISSUES</IssueButton>
          <DeleteButton>DELETE</DeleteButton>
        </div>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  ${flexSet('column')}
  width: 60%;
  padding: 10px;
  border: ${props => props.theme.basicBorder};
  border-radius: 5px;
  margin: 15px;
  box-shadow: 0 0 5px ${props => props.theme.lightGray};
`;

const OwnerWrapper = styled.div`
  ${flexSet('row', 'flex-start', 'center')}
  margin-bottom: 10px;
`;

const OwnerAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: center center / 100% url(${props => props.AvatarImg});
`;

const OwnerLogin = styled.p`
  margin-left: 7px;
  font-weight: 800;
`;

const Title = styled.h2`
  color: ${props => props.theme.keyColor};
  font-size: 18px;
  font-weight: 600;
  line-height: 120%;
`;

const Description = styled.p`
  margin: 7px 0;
  line-height: 120%;
`;

const IssueButton = styled.button`
  ${buttonSet('rgb(255,255,255)', 'rgb(51,102,255)', '12px')}
  margin-right: 5px;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;
const DeleteButton = styled.button`
  ${buttonSet('rgb(255,255,255)', 'rgb(51, 51, 51)', '12px')}
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;

export default RepositoryCard;

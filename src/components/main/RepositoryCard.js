import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD:src/components/main/RepositoryCard.js
=======
import { Link } from 'react-router-dom';
>>>>>>> 6c9b6ed (Add: 등록한 Repository Issue 모아보기 기능 구현 완료):src/components/RepositoryCard.js
import { flexSet, buttonSet } from '../../styles/mixin';

const RepositoryCard = ({ data, handleUnsubscribe }) => {
  return (
    <CardContainer>
      <OwnerWrapper>
        <OwnerAvatar AvatarImg={data.owner.avatar_url} />
        <OwnerLogin>{data.owner.login}</OwnerLogin>
      </OwnerWrapper>
      <div>
        <LinkedTitle href={data.html_url} target="_blank">
          {data.name}
        </LinkedTitle>
        <Description>
          {data.description && data.description.length > 80
            ? data.description.substring(0, 80)
            : data.description}
        </Description>
        <div>
<<<<<<< HEAD:src/components/main/RepositoryCard.js
          <IssueButton>ISSUES</IssueButton>
=======
          <Link
            to={{
              pathname: `/issue/${data.name}`,
              state: { owner: data.owner.login, name: data.name },
            }}
          >
            <IssueButton>ISSUES</IssueButton>
          </Link>
>>>>>>> 6c9b6ed (Add: 등록한 Repository Issue 모아보기 기능 구현 완료):src/components/RepositoryCard.js
          <DeleteButton id={data.id} onClick={handleUnsubscribe}>
            UNSUBSCRIBE
          </DeleteButton>
        </div>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  ${flexSet('column')}
  margin: 12px 0;
  padding: 10px;
  border: ${props => props.theme.basicBorder};
  border-radius: 5px;
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

const LinkedTitle = styled.a`
  color: ${props => props.theme.keyColor};
  font-size: 18px;
  font-weight: 600;
  line-height: 120%;

  :hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  margin: 7px 0;
  line-height: 120%;
`;

const IssueButton = styled.button`
  ${buttonSet('rgb(255,255,255)', 'rgb(51,102,255)', '12px')}
  width: 70px;
  margin-right: 5px;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;
const DeleteButton = styled.button`
  ${buttonSet('rgb(255,255,255)', 'rgb(150, 150, 150)', '12px')}
  width: 70px;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;

export default RepositoryCard;

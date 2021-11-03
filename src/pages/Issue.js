import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IssueList from '../components/Issue/IssueList';
import Pagenation from '../components/Pagenation';
import Loading from '../components/Loading';
import Message from '../components/Message';
import { getIssue } from '../api';
import { flexSet } from '../styles/mixin';

const Issue = ({ location: { state } }) => {
  const [issueData, setIssueData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentList, setCurrentList] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getIssueData(state.owner, state.name);
  }, []);

  const getIssueData = async (owner, name) => {
    try {
      setLoading(true);
      const { data } = await getIssue(owner, name);
      setIssueData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <IssueContainer>
      <ContentWrapper>
        {loading ? (
          <Loading />
        ) : currentList ? (
          <>
            <RepositoryName>'{state.name}' Issues</RepositoryName>
            <IssueList list={currentList} />
            <Pagenation
              listData={issueData}
              totalPages={Math.ceil(issueData.length / 10)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setCurrentList={setCurrentList}
            />
          </>
        ) : (
          <Message
            imgUrl={'icon/empty-box.png'}
            text={`There's no Issue for '${state.name}'`}
          />
        )}
      </ContentWrapper>
    </IssueContainer>
  );
};

const IssueContainer = styled.div`
  ${flexSet('column')}
  margin-top: 45px;
`;

const ContentWrapper = styled.div`
  width: 60%;
  margin: 20px auto;
`;
const RepositoryName = styled.h1`
  margin: 30px 0;
  color: ${props => props.theme.darkGray};
  font-size: 20px;
  font-weight: 800;
`;

export default Issue;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagenation from '../components/Pagenation';
import Loading from '../components/Loading';
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
        <RepositoryName>{state.name}</RepositoryName>
        {loading ? (
          <Loading />
        ) : (
          <>
            <ResultTable>
              <thead>
                <tr>
                  <TableHead>Title</TableHead>
                  <TableHead>Created on</TableHead>
                  <TableHead>Updated on</TableHead>
                  <TableHead>State</TableHead>
                </tr>
              </thead>
              <thead>
                {currentList &&
                  currentList.length !== 0 &&
                  currentList.map(data => {
                    return (
                      <TableBody key={data.id}>
                        <MainWrapper>
                          <TitleWrapper>
                            <LinkTitle href={data.html_url} target="_blank">
                              {data.title}
                            </LinkTitle>
                            <Description>
                              Issue opend by {data.user.login}
                            </Description>
                          </TitleWrapper>
                        </MainWrapper>
                        <SubInformation>
                          {data.created_at.substring(0, 10)}
                        </SubInformation>
                        <SubInformation>
                          {data.updated_at.substring(0, 10)}
                        </SubInformation>
                        <SubInformation>{data.state}</SubInformation>
                      </TableBody>
                    );
                  })}
              </thead>
            </ResultTable>
            <Pagenation
              listData={issueData}
              totalPages={Math.ceil(issueData.length / 10)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setCurrentList={setCurrentList}
            />
          </>
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
  font-size: 20px;
  font-weight: 800;
`;
const ResultTable = styled.table`
  width: 100%;
`;

const TableHead = styled.th`
  padding: 10px 7px;
  background-color: rgba(240, 240, 240, 0.7);
  vertical-align: middle;
  font-size: 12px;

  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    width: 80px;
  }
`;

const TableBody = styled.tr`
  border-bottom: 1px solid rgba(230, 230, 230, 0.7);
`;

const MainWrapper = styled.td`
  ${flexSet}
  padding: 10px 5px;
`;

const TitleWrapper = styled.div`
  margin-left: 7px;
`;

const LinkTitle = styled.a`
  color: ${props => props.theme.keyColor};
  font-size: 12px;
  font-weight: 600;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Description = styled.div`
  margin-top: 5px;
  color: ${props => props.theme.DarkGray};
  font-size: 12px;
  line-height: 150%;
`;

const SubInformation = styled.td`
  padding: 10px 5px;
  color: ${props => props.theme.basicGray};
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
`;

export default Issue;

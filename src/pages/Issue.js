import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loading from '../components/Loading';
import { getIssue } from '../api';
import { flexSet } from '../styles/mixin';
import {
  DoubleRightOutlined,
  DoubleLeftOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';

const Issue = ({ location: { state } }) => {
  const [issueData, setIssueData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentList, setCurrentList] = useState();
  const [totalPages, setTotalPages] = useState();
  const [pageNumber, setPageNumber] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getIssueData(state.owner, state.name);
  }, []);

  useEffect(() => {
    changeList(currentPage);
    setTotalPages(Math.ceil(issueData.length / 10));
  }, [issueData]);

  const getIssueData = async (owner, name) => {
    try {
      setLoading(true);
      const { data } = await getIssue(owner, name);
      const total = Math.ceil(data.length / 10);
      setIssueData(data);
      handlePage(0, total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePage = (start, last) => {
    let page = [];
    for (let i = start; i < last; i++) {
      page.push(i + 1);
    }
    setPageNumber(page);
  };

  const changeList = page => {
    const list = issueData.slice(page - 1, page + 9);
    setCurrentList(list);
    setCurrentPage(page);
    totalPages > 5 &&
      (page !== totalPages
        ? handlePage(page, page + 5)
        : handlePage(page - 5, page));
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
            <PagenationWrapper>
              {totalPages > 5 && (
                <>
                  <DoubleLeftOutlined onClick={() => changeList(1)} />
                  <LeftOutlined
                    onClick={() =>
                      currentPage !== 1 && changeList(currentPage - 1)
                    }
                  />
                </>
              )}
              <PageNumberWrapper>
                {pageNumber &&
                  pageNumber.map(page => (
                    <Page
                      key={page}
                      bold={currentPage === page ? '800' : 'normal'}
                      onClick={() => currentPage !== page && changeList(page)}
                    >
                      {page}
                    </Page>
                  ))}
              </PageNumberWrapper>
              {totalPages > 5 && (
                <>
                  <RightOutlined
                    onClick={() =>
                      currentPage !== totalPages && changeList(currentPage + 1)
                    }
                  />
                  <DoubleRightOutlined onClick={() => changeList(totalPages)} />
                </>
              )}
            </PagenationWrapper>
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

const PagenationWrapper = styled.div`
  ${flexSet('row', 'center', 'center')}
  margin: 15px 0;
  color: ${props => props.theme.darkGray};
  font-size: 12px;
  cursor: pointer;
`;

const PageNumberWrapper = styled.div`
  ${flexSet('row', 'space-evenly', 'center')}
`;

const Page = styled.div`
  margin: 0 7px;
  font-weight: ${props => props.bold};
`;

export default Issue;

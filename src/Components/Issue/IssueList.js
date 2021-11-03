import React from 'react';
import styled from 'styled-components';
import { flexSet, tableHeadSet, tableSubSet } from '../../styles/mixin';

const IssueList = ({ list }) => {
  return (
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
        {list &&
          list.length !== 0 &&
          list.map(data => {
            return (
              <tr key={data.id}>
                <MainWrapper>
                  <TitleWrapper>
                    <LinkTitle href={data.html_url} target="_blank">
                      {data.title}
                    </LinkTitle>
                    <Description>Issue opend by {data.user.login}</Description>
                  </TitleWrapper>
                </MainWrapper>
                <SubInformation>
                  {data.created_at.substring(0, 10)}
                </SubInformation>
                <SubInformation>
                  {data.updated_at.substring(0, 10)}
                </SubInformation>
                <SubInformation>{data.state}</SubInformation>
              </tr>
            );
          })}
      </thead>
    </ResultTable>
  );
};

const ResultTable = styled.table`
  width: 100%;
`;

const TableHead = styled.th`
  ${tableHeadSet}
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
  }
`;

const Description = styled.div`
  margin-top: 5px;
  color: ${props => props.theme.DarkGray};
  font-size: 12px;
  line-height: 150%;
`;

const SubInformation = styled.td`
  ${tableSubSet}
`;

export default IssueList;

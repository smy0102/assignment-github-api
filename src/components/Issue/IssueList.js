import React from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/mixin';

const IssueList = ({ list }) => {
  return (
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
          {list &&
            list.length !== 0 &&
            list.map(data => {
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
    </>
  );
};

const ResultTable = styled.table`
  width: 100%;
`;

const TableHead = styled.th`
  padding: 10px 7px;
  background-color: rgba(240, 240, 240, 0.7);
  vertical-align: middle;
  color: ${props => props.theme.darkGray};
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

export default IssueList;

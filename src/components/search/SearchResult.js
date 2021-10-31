import React from 'react';
import styled from 'styled-components';

const SearchResult = () => {
  return (
    <ResultContainer>
      <ResultCount>'120' repository results for 'jquery'</ResultCount>
      <ResultTable>
        <thead>
          <tr>
            <TableHead>Name / Description</TableHead>
            <TableHead>Created on</TableHead>
            <TableHead>Updated on</TableHead>
            <TableHead>Issues</TableHead>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TitleWrapper>
              <Title>js-jquery-event-listeners-readme-bootcamp-prep-000</Title>
              <Description>js-jquery-event-listenee</Description>
            </TitleWrapper>
            <SubInformation>2022-01-02</SubInformation>
            <SubInformation>2022-01-02</SubInformation>
            <SubInformation>11</SubInformation>
          </tr>
        </tbody>
      </ResultTable>
    </ResultContainer>
  );
};

const ResultContainer = styled.div`
  margin-top: 30px;
`;
const ResultCount = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
`;

const ResultTable = styled.table`
  width: 100%;
`;

const TableHead = styled.th`
  padding: 7px 5px;
  background-color: rgba(240, 240, 240, 0.7);
  vertical-align: middle;
  font-size: 12px;
`;

const TitleWrapper = styled.td`
  padding: 10px 5px;
  border-bottom: 1px solid rgba(230, 230, 230, 0.7);
`;

const Title = styled.div`
  color: ${props => props.theme.keyColor};
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
`;

const SubInformation = styled.td`
  padding: 10px 5px;
  border-bottom: 1px solid rgba(230, 230, 230, 0.7);
  color: ${props => props.theme.basicGray};
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
`;

export default SearchResult;

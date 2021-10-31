import React from 'react';
import styled from 'styled-components';
import NoResult from '../components/search/NoResult';
import { flexSet } from '../styles/mixin';

const Search = () => {
  return (
    <SearchContainer>
      <ContentWrapper>
        <PageTitle>SEARCH</PageTitle>
        <SearchInputWrapper>
          <Form>
            <Input placeholder="Search Repositories by name" />
          </Form>
        </SearchInputWrapper>
        <NoResult />
      </ContentWrapper>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  ${flexSet}
  margin-top: 45px;
`;

const ContentWrapper = styled.div`
  width: 60%;
  margin: 20px auto;
`;

const PageTitle = styled.h1`
  margin: 30px 0;
  font-size: 20px;
  font-weight: 800;
`;

const SearchInputWrapper = styled.div`
  ${flexSet}
  width: 300px;
  padding: 5px 15px;
  border: ${props => props.theme.basicBorder};
  border-radius: 20px;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
`;

export default Search;

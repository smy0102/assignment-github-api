import React, { useState } from 'react';
import styled from 'styled-components';
import SearchResult from '../components/search/SearchResult';
import NoResult from '../components/search/NoResult';
import { getRepository } from '../api';
import { flexSet } from '../styles/mixin';
import { SearchOutlined } from '@ant-design/icons';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const updateTerm = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!inputValue) {
      alert('Please enter a search term');
    } else {
      setSearchTerm(inputValue);
      searchByTerm(inputValue);
    }
  };

  const deleteInput = () => {
    setInputValue('');
  };

  const searchByTerm = async value => {
    try {
      setLoading(true);
      const { data: result } = await getRepository(value);
      const newenw = await getRepository(value);
      setData(result);
      console.log(newenw);
    } catch (error) {
      console.log(error);
    } finally {
      setInputValue('');
      setLoading(false);
    }
  };

  return (
    <SearchContainer>
      <ContentWrapper>
        <PageTitle>SEARCH</PageTitle>
        <SearchInputWrapper>
          <SearchOutlined />
          <Form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={updateTerm} />
          </Form>
          <DeleteButton isOn={inputValue} onClick={deleteInput}>
            X
          </DeleteButton>
        </SearchInputWrapper>
        {loading ? (
          <div>'loading'</div>
        ) : (
          <>
            {data && data.total_count !== 0 && (
              <SearchResult data={data} searchTerm={searchTerm} />
            )}
            {data && data.total_count === 0 && (
              <NoResult searchTerm={searchTerm} />
            )}
          </>
        )}
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
  width: 190px;
  padding: 5px;
  position: relative;
  border-bottom: 1px solid ${props => props.theme.lightGray};
`;

const Form = styled.form`
  position: absolute;
  top: 3px;
  left: 22px;
`;

const DeleteButton = styled.button`
  visibility: ${props => (props.isOn ? 'visible' : 'hidden')};
  position: absolute;
  top: 5px;
  left: 170px;
  color: ${props => props.theme.basicGray};
  cursor: pointer;
`;

export default Search;

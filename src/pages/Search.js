import React, { useState } from 'react';
import styled from 'styled-components';
import SearchResult from '../Components/Search/SearchResult';
import Message from '../Components/Common/Message';
import Loading from '../Components/Common/Loading';
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
      setData(result);
    } catch (error) {
      console.log(`error: ${error}`);
    } finally {
      setInputValue('');
      setLoading(false);
    }
  };

  return (
    <SearchContainer>
      <ContentWrapper>
        <SearchInputWrapper>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="search">
              <SearchOutlined />
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by name..."
              value={inputValue}
              onChange={updateTerm}
            />
          </Form>
          <DeleteButton isOn={inputValue} onClick={deleteInput}>
            X
          </DeleteButton>
        </SearchInputWrapper>
        {loading ? (
          <Loading />
        ) : (
          <>
            {data && data.total_count !== 0 && (
              <SearchResult data={data} searchTerm={searchTerm} />
            )}
            {data && data.total_count === 0 && (
              <Message
                imgUrl={'icon/subscribe.png'}
                text={`We couldn’t find anything matching '${searchTerm}'`}
                searchTerm={searchTerm}
              />
            )}
          </>
        )}
      </ContentWrapper>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  ${flexSet}
  margin-top: 65px;
`;

const ContentWrapper = styled.div`
  width: 60%;
  margin: 20px auto;
`;

const SearchInputWrapper = styled.div`
  ${flexSet}
  width: 190px;
  padding: 5px;
  position: relative;
  border-bottom: 1px solid ${props => props.theme.basicGray};
`;

const Form = styled.form`
  position: absolute;
  top: -8px;
  left: 5px;
`;

const DeleteButton = styled.button`
  visibility: ${props => (props.isOn ? 'visible' : 'hidden')};
  position: absolute;
  top: -8px;
  left: 170px;
  color: ${props => props.theme.basicGray};
`;

export default Search;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagenation from '../Pagenation';
import { flexSet } from '../../styles/mixin';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const SearchResult = ({ data, searchTerm }) => {
  const [subscribeData, setSubscribeData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentList, setCurrentList] = useState();

  useEffect(() => {
    setSubscribeData(JSON.parse(localStorage.getItem('subscribe')));
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem('subscribe', JSON.stringify(subscribeData));
  }, [subscribeData]);

  const handleSubscribe = event => {
    const isDelete = subscribeData.some(
      data => data.id === Number(event.currentTarget.id)
    );
    const remainedData = subscribeData.filter(
      data => data.id !== Number(event.currentTarget.id)
    );
    const newRepository = data.items.filter(
      data => data.id === Number(event.currentTarget.id)
    );

    if (isDelete) {
      setSubscribeData([...remainedData]);
    } else {
      subscribeData.length === 4
        ? alert('Subscriptions can be up to 4')
        : setSubscribeData([...subscribeData, ...newRepository]);
    }
  };

  return (
    <ResultContainer>
      <ResultCount>
        '{data.total_count.toLocaleString()}' repository results for '
        {searchTerm}'
      </ResultCount>
      <ResultTable>
        <thead>
          <tr>
            <TableHead>Name / Description</TableHead>
            <TableHead>Created on</TableHead>
            <TableHead>Updated on</TableHead>
            <TableHead>Stargazers</TableHead>
          </tr>
        </thead>
        <tbody>
          {currentList &&
            currentList.map(item => (
              <tr key={item.id}>
                <MainWrapper>
                  <HeartButtonWrapper id={item.id} onClick={handleSubscribe}>
                    {subscribeData &&
                    subscribeData.some(data => item.id === data.id) ? (
                      <HeartFilled />
                    ) : (
                      <HeartOutlined />
                    )}
                  </HeartButtonWrapper>
                  <TitleWrapper>
                    <LinkTitle href={item.html_url} target="_blank">
                      {item.full_name}
                    </LinkTitle>
                    <Description>
                      {item.description && item.description.length > 70
                        ? `${item.description.substring(0, 70)}...`
                        : item.description}
                    </Description>
                    <Language>
                      {item.language && `Mainly written in ${item.language}`}
                    </Language>
                  </TitleWrapper>
                </MainWrapper>
                <SubInformation>
                  {item.created_at.substring(0, 10)}
                </SubInformation>
                <SubInformation>
                  {item.updated_at.substring(0, 10)}
                </SubInformation>
                <SubInformation>
                  {item.stargazers_count.toLocaleString()}
                </SubInformation>
              </tr>
            ))}
        </tbody>
      </ResultTable>
      <Pagenation
        listData={data.items}
        totalPages={Math.ceil(data.items.length / 10)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setCurrentList={setCurrentList}
      />
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

const MainWrapper = styled.td`
  ${flexSet}
  padding: 10px 5px;
  border-bottom: 1px solid rgba(230, 230, 230, 0.7);
`;

const HeartButtonWrapper = styled.div`
  color: ${props => props.theme.keyColor};
  font-size: 12px;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

const TitleWrapper = styled.div`
  margin-left: 7px;
`;

const LinkTitle = styled.a`
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
  line-height: 150%;
`;

const Language = styled.div`
  color: ${props => props.theme.basicGray};
  font-size: 12px;
  line-height: 150%;
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

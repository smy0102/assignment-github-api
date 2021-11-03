import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/mixin';
import {
  DoubleRightOutlined,
  DoubleLeftOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';

const Pagenation = ({
  listData,
  totalPages,
  setCurrentPage,
  currentPage,
  setCurrentList,
}) => {
  const [pageNumber, setPageNumber] = useState();

  const handlePage = (start, last) => {
    let page = [];
    for (let i = start; i < last; i++) {
      page.push(i + 1);
    }
    setPageNumber(page);
  };

  const changeList = useCallback(
    page => {
      const startIndex = (page - 1) * 10;
      setCurrentList(listData.slice(startIndex, startIndex + 9));
      setCurrentPage(page);
      totalPages > 5 &&
        (page !== totalPages
          ? handlePage(page, page + 5)
          : handlePage(page - 5, page));
    },
    [listData, setCurrentList, setCurrentPage, totalPages]
  );

  useEffect(() => {
    changeList(currentPage);
    handlePage(0, totalPages);
  }, [changeList, currentPage, totalPages]);

  return (
    <PagenationWrapper>
      {totalPages > 5 ? (
        <>
          <DoubleLeftOutlined onClick={() => changeList(1)} />
          <LeftOutlined
            onClick={() => currentPage !== 1 && changeList(currentPage - 1)}
          />
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
          <RightOutlined
            onClick={() =>
              currentPage !== totalPages && changeList(currentPage + 1)
            }
          />
          <DoubleRightOutlined onClick={() => changeList(totalPages)} />
        </>
      ) : (
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
      )}
    </PagenationWrapper>
  );
};

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

export default Pagenation;

import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { flexSet } from '../../styles/mixin';

const Loading = () => {
  const loadingIcon = <LoadingOutlined spin />;
  return (
    <LoadingContainer>
      <Spin indicator={loadingIcon} />
      <Text>Loading...</Text>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  ${flexSet('column', 'center', 'center')};
  margin-top: 60px;
  color: ${props => props.theme.keyColor};
  font-size: 20px;
`;

const Text = styled.div`
  font-size: 16px;
  margin-top: 20px;
`;

export default Loading;

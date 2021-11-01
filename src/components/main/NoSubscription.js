import React from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/mixin';

const NoSubscription = () => {
  return (
    <NoSubscriptionContainer>
      <SubscribeImage />
      <Text>Subscribe to your favorite repositories :)</Text>
    </NoSubscriptionContainer>
  );
};

const NoSubscriptionContainer = styled.div`
  ${flexSet('column', 'center', 'center')}
  margin: 50px 0;
`;

const SubscribeImage = styled.div`
  width: 60px;
  height: 60px;
  background: center center / 100% url('icon/subscribe.png');
  opacity: 0.4;
`;

const Text = styled.div`
  margin-top: 30px;
  color: ${props => props.theme.basicGray};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  text-align: center;
`;

export default NoSubscription;

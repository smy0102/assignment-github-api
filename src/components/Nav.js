import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { flexSet } from '../styles/mixin';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  ${flexSet('row', 'center', 'center')}
  width: 100%;
  height: 45px;
  padding: 0px 10px;
  background-color: rgba(255, 255, 255);
  box-shadow: 0px 1px 5px 2px rgba(150, 150, 150, 0.8);
  z-index: 10;
`;

const List = styled.ul`
  ${flexSet}
  width: 60%;
`;

const Item = styled.li`
  width: 100px;
  height: 45px;
  border-bottom: 3px solid
    ${props => (props.current ? props.theme.keyColor : 'transparent')};

  text-align: center;
  transition: border-bottom 0.5s ease-in-out;
`;

const StyledLink = styled(Link)`
  height: 45px;
  ${flexSet('row', 'center', 'center')}
`;

const Nav = ({ location: { pathname } }) => {
  return (
    <NavContainer>
      <List>
        <Item current={pathname === '/repository'}>
          <StyledLink to="/repository">My Repository</StyledLink>
        </Item>
        <Item current={pathname === '/search'}>
          <StyledLink to="/search">Search</StyledLink>
        </Item>
      </List>
    </NavContainer>
  );
};

export default withRouter(Nav);

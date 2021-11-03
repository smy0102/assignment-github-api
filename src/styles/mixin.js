import { css } from 'styled-components';

export const flexSet = (
  direction = 'row',
  justify = 'flex-start',
  align = 'flex-start'
) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

export const buttonSet = (
  fontColor = 'rgb(0,0,0)',
  bgColor = 'rgb(255,255,255)',
  fontSize = '14px'
) => css`
  all: unset;
  padding: 5px 7px 3px 7px;
  color: ${fontColor};
  background-color: ${bgColor};
  font-size: ${fontSize};
  text-align: center;
  cursor: pointer;
`;

export const tableHeadSet = () => css`
  padding: 10px 7px;
  background-color: rgba(230, 230, 230, 0.7);
  vertical-align: middle;
  color: ${props => props.theme.darkGray};
  font-size: 12px;

  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    width: 80px;
  }
`;

export const tableSubSet = () => css`
  padding: 10px 5px;
  color: ${props => props.theme.basicGray};
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
`;

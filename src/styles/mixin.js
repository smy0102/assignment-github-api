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

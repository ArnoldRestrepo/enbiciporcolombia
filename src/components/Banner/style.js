import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {opacity: .4}
  to {opacity: 1}
`;

export const Wrapper = styled.section`
  max-width: 100%;
  position: relative;
  margin: auto;
  & .fade {
    -webkit-animation-name: ${fade};
    -webkit-animation-duration: 1.5s;
    animation-name: ${fade};
    animation-duration: 1.5s;
  }
`;

export const Slide = styled.article`
  display: none;
  img {
    width: 100%;
  }
`;

export const Prev = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
export const Next = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  right: 0;
  border-radius: 3px 0 0 3px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Dots = styled.div`
  text-align: center;
`;

export const Dot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &.active,
  &:hover {
    background-color: #717171;
  }
`;

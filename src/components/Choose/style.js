import styled from 'styled-components';

export const ChooseWrapper = styled.section`
  padding: 3rem 1rem;
  background-color: var(--color-white);
`;

export const ChooseHeader = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
  small {
    color: var(--color-blue);
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
  }
  h3 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    width: 80%;
  }
  @media screen and (max-width: 468px) {
    h3 {
      font-size: 2.5rem;
    }
    p {
      width: 100%;
    }
  }
`;

export const ChooseContent = styled.article`
  margin: 0 auto;
  width: 90%;
  padding: 2rem 0;
`;

export const ChooseList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  position: relative;
  li {
    overflow: hidden;
  }
`;

export const LinkOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-blue);
  color: var(--color-white);
  font-weight: bold;
  opacity: 0;
`;

export const Link = styled.a`
  position: relative;
  display: block;
  overflow: hidden;
  &:hover div {
    opacity: 1;
    transition: opacity ease-in 200ms;
  }
`;

export const LinkImage = styled.img`
  border-radius: 50%;
  backface-visibility: hidden;
  width: 100%;
  height: auto;
`;
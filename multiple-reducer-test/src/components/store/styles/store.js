import styled from "styled-components/macro";

export const Container = styled.div`
  width: 300px;
  padding: 50px;
  text-align: center;
  border: 2px solid #222;
  margin: auto;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;

export const Title = styled.h1`
  letter-spacing: 2px;
  font-size: 3rem;
  color: #0e1e3b;
  grid-column: 1/3;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  padding: 0 10px;
  
`;

export const WrapperTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ type }) => (type === 'apple' ? 'red' : 'orange')};

`;

export const WrapperText = styled.p`
    font-size: 2rem;
`;

export const Button = styled.button`
  border: none;
  background: #03ff07;
  color: #fff;
  font-size: 1rem;
  padding: 0.2em 1em;
  margin: 0.5em 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s linear;
  letter-spacing: 1px;

  &:last-of-type {
    background: #c90202;
  }

  &:hover {
    opacity: 0.8;
  }
`;

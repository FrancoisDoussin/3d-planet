import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-width:100%;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: auto;
  width: 50vw;
  border-radius: 2em;
`;

export const Icons = styled.div`
  padding: 1em;
`;

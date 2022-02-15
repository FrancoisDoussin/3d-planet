import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  color: rgb(184, 184, 184);
  font-size: 3em;
`;

export const Subtitle = styled.h2`
  color: rgb(223, 204, 146);
`;

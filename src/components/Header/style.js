import styled, { keyframes } from 'styled-components';

export const TitleContainer = styled.div`
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

const upAndDown = keyframes`
  from {
    bottom: 10px;
  }
  
  50% {
    bottom: 0;
  }

  to {
    bottom: 10px;
  }
`;

export const ArrowDown = styled.h2`
  color: rgb(184, 184, 184);
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  font-size: 3em;
  animation: ${upAndDown} 1s linear infinite;
  &:hover {
    cursor: pointer;
  }
`;

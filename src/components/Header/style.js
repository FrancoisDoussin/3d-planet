import styled, { keyframes } from 'styled-components';

export const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${props => props.theme.colors.primary};
  font-size: 2.5em;
`;

export const Subtitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
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
  color: ${props => props.theme.colors.primary};
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

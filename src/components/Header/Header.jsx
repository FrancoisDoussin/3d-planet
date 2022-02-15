import { TitleContainer, Title, Subtitle, ArrowDown } from './style';
import { FaArrowAltCircleDown } from 'react-icons/fa';

const Header = () => (
  <>
    <TitleContainer>
      <Title>François Doussin</Title>
      <Subtitle>Développer - Photographer</Subtitle>
    </TitleContainer>
    <ArrowDown>
      <FaArrowAltCircleDown />
    </ArrowDown>
  </>
);

export default Header;

import P from 'prop-types';
import * as Styled from './styles';
import TextComponent from '../TextComponent';
import SectionContainer from '../SectionContainer';

const Footer = ({ html }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

export default Footer;

Footer.propTypes = {
  html: P.string.isRequired,
};

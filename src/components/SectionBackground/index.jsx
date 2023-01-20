import P from 'prop-types';
import * as Styled from './styles';

import SectionContainer from '../SectionContainer';

const random = () =>
  `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-');

const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}) => {
  const id = sectionId ? sectionId : random();
  return (
    <Styled.Container background={background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

export default SectionBackground;

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  sectionId: P.string,
};

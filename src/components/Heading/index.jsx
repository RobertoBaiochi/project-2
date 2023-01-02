import * as Styled from './styles';
import P from 'prop-types';

const Heading = ({ children }) => {
  return <Styled.Title>{children}</Styled.Title>;
};

export default Heading;

Heading.propTypes = {
  children: P.node.isRequired,
};

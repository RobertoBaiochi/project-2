import Heading from '../../components/Heading';
import { theme } from '../../styles/theme';
import Base from '../Base';
import { mockBase } from '../Base/stories';
import * as Styled from './style';

function Home() {
  return <Base {...mockBase} />;
}

export default Home;

import Heading from '../../components/Heading';
import { theme } from '../../styles/theme';
import * as Styled from './style';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper theme={theme}>
        <Heading>Baguiu doido</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;

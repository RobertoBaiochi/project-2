import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacing.xhuge};
    }
  `};
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing.large};
  `};
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      left: ${theme.spacing.xxlarge};
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 7rem;
      top: -3rem;
      left: -${theme.spacing.xxlarge};
      transform: rotate(10deg);
    }
  `};
`;

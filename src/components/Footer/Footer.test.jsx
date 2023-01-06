import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Footer from '.';

describe('<Footer />', () => {
  it('should render html', () => {
    const { container } = renderTheme(<Footer html={'<h1>Teste</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Teste' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
      }

      .c2 {
        font-size: 2.4rem;
      }

      .c1 {
        max-width: 120rem;
        margin-inline: auto;
        padding: 3.2rem;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1"
          >
            <p
              class="c2"
            >
              <h1>
                Teste
              </h1>
            </p>
          </div>
        </footer>
      </div>
    `);
  });
});

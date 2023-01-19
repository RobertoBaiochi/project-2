import { useEffect, useRef, useState } from 'react';
import Heading from '../../components/Heading';
import PageNotFound from '../PageNotFound';
import Base from '../Base';
import { mockBase } from '../Base/mock';
import { theme } from '../../styles/theme';
import * as Styled from './style';
import { config } from '@storybook/addon-actions';

import { mapData } from '../../api/map-data';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
      const slug = pathName ? pathName : 'lading-page';

      try {
        const data = await fetch(
          'http://localhost:1337/api/pages?populate=deep&pagination[pageSize]=1&sort[0]=id:desc',
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
        console.log(json);
      } catch {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current === false;
    };
  }, []);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
      return <PageNotFound />;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  return <Base {...mockBase} />;
}

export default Home;

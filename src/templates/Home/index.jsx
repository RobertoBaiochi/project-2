import { useEffect, useRef, useState } from 'react';
import * as Styled from './style';

import Heading from '../../components/Heading';
import GridTwoColumn from '../../components/GridTwoColumn';
import GridContent from '../../components/GridContent';
import GridSection from '../../components/GridSection';
import GridGallery from '../../components/GridGallery';
import PageNotFound from '../PageNotFound';
import Loading from '../Loading';

import Base from '../Base';
import { mockBase } from '../Base/mock';

import { mapData } from '../../api/map-data';
import { useLocation } from 'react-router-dom';

import config from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);
  const location = useLocation();

  useEffect(() => {
    const load = async () => {
      const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
      const slug = pathName ? pathName : 'landing-page';

      try {
        const data = await fetch(
          `https://strapi-v4-test-zae9.onrender.com/api/pages/?filtes[slug]=${slug}&populate=deep`,
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={index} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={index} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridSection key={index} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridGallery key={index} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;

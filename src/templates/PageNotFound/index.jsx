import { useEffect } from 'react';
import config from '../../config';
import GridContent from '../../components/GridContent';

const PageNotFound = () => {
  useEffect(() => {
    document.title = `Página não encontrada | ${config.siteName}`;
  }, []);

  return (
    <GridContent
      title="Error 404"
      html='<p>Página não encontrada. <a href="/">Clique para voltar</a> '
    />
  );
};

export default PageNotFound;

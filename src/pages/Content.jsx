import Header from '../components/Header';
import Meta from '../components/Meta';

const Content = () => {
  const pageTitle = 'VAL-CONTENT-V1';
  const pageDescription = 'Get content optionally filtered by locale';

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
    </div>
  );
};

export default Content;

import Header from '../components/Header';
import Meta from '../components/Meta';

const Status = () => {
  const pageTitle = 'VAL-STATUS-V1';
  const pageDescription = 'Get VALORANT status for the given platform';

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
    </div>
  );
};

export default Status;

import { useSelector } from 'react-redux';
import StatusHeader from '../components/StatusHeader';
import Meta from '../components/Meta';

const Status = () => {
  const status = useSelector((state) => state.status);
  const pageTitle = 'VAL-STATUS-V1';
  const pageDescription = 'Get VALORANT status for the given platform';

  return (
    <div>
      <Meta title={pageTitle} />
      <StatusHeader status={status} head={pageTitle} description={pageDescription} />
    </div>
  );
};

export default Status;

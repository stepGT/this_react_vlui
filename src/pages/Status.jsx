import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { useSelector } from 'react-redux';
import StatusHeader from '../components/StatusHeader';
import Meta from '../components/Meta';
import { setValues } from '../features/status/statusSlice';
import { REGIONS } from '../constants';

const { REACT_APP_VAL_API_KEY } = process.env;


const Status = () => {
  const status = useSelector((state) => state.status);
  const pageTitle = 'VAL-STATUS-V1';
  const pageDescription = 'Get VALORANT status for the given platform';
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async (region = 'br') => {
      try {
        const response = await axios
          .get(
            `https://${region}.api.riotgames.com/val/status/v1/platform-data?api_key=${REACT_APP_VAL_API_KEY}`
          )
          .then((res) => res.data);
        dispatch(setValues(response));
      } catch (error) {
        console.log('error', error);
      }
    };
    // Fetch all status data
    setTimeout(() => REGIONS.map(el => fetchData(el)), 1000);
  }, [dispatch]);

  return (
    <div>
      <Meta title={pageTitle} />
      <StatusHeader status={status} head={pageTitle} description={pageDescription} />
    </div>
  );
};

export default Status;

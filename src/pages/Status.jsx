import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Meta from '../components/Meta';

const { REACT_APP_VAL_API_KEY } = process.env;
// REGIONS
const regions = ['AP', 'BR', 'EU', 'KR', 'LATAM', 'NA'];

const valStatusV1 = `https://eu.api.riotgames.com/val/status/v1/platform-data?api_key=${REACT_APP_VAL_API_KEY}`;

const Status = () => {
  const [getStatus, setGetStatus] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const pageTitle = 'VAL-STATUS-V1';
  const pageDescription = 'Get VALORANT status for the given platform';

  const fetchStatus = region => {
    setIsFetching(true);
    axios.get(`https://${region}.api.riotgames.com/val/status/v1/platform-data?api_key=${REACT_APP_VAL_API_KEY}`).then((res) => {
      setGetStatus(res.data);
      setIsFetching(false);
    });
    
  }

  useEffect(() => {
    axios.get(valStatusV1).then((res) => {
      setGetStatus(res.data);
      setIsFetching(false);
    });
  }, []);

  return (
    <div>
      <Meta title={pageTitle} />
      <Header isFetching={isFetching} fetchStatus={fetchStatus} regions={regions} data={getStatus} head={pageTitle} description={pageDescription} />
    </div>
  );
};

export default Status;

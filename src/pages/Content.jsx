import { useState, useEffect } from 'react';
import axios from 'axios';
import ContentHeader from '../components/ContentHeader';
import Meta from '../components/Meta';

const { REACT_APP_VAL_API_KEY } = process.env;

const valContentV1 = `https://eu.api.riotgames.com/val/content/v1/contents?api_key=${REACT_APP_VAL_API_KEY}`;

const Content = () => {
  const [getContent, setGetContent] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get(valContentV1).then((res) => {
      setGetContent(res.data);
      setIsFetching(false);
    });
  }, []);

  const pageTitle = 'VAL-CONTENT-V1';
  const pageDescription = 'Get content optionally filtered by locale';

  return (
    <div>
      <Meta title={pageTitle} />
      <ContentHeader isFetching={isFetching} data={getContent} description={pageDescription} head={pageTitle} />
    </div>
  );
};

export default Content;

import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import "./App.css";

import Layout from './layout/Layout';

import Content from './pages/Content';
import Status from "./pages/Status";
import { setValues } from './features/status/statusSlice';
import { REGIONS } from './constants';

const { REACT_APP_VAL_API_KEY } = process.env;

const App = () => {
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
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Content />} exact />
          <Route path="/status" element={<Status />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;

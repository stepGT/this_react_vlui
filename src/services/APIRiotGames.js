import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setValues } from '../features/status/statusSlice';
import { REGIONS } from '../constants';

const { REACT_APP_VAL_API_KEY } = process.env;

const APIRiotGames = () => {
  const dispatch = useDispatch();
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
  useEffect(() => {
    setTimeout(() => REGIONS.map((el) => fetchData(el)), 1000);
  }, []);
};

export default APIRiotGames;

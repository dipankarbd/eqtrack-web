import axios from 'axios';

const BASE_API_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0';

const fetchPastHour = () => {
  const url = `${BASE_API_URL}/summary/all_hour.geojson`;

  return axios({
    url,
    method: 'get',
  });
};

const fetchPastDay = () => {
  const url = `${BASE_API_URL}/summary/all_day.geojson`;

  return axios({
    url,
    method: 'get',
  });
};

const fetchPast7Days = () => {
  const url = `${BASE_API_URL}/summary/all_week.geojson`;

  return axios({
    url,
    method: 'get',
  });
};

export { fetchPastHour, fetchPastDay, fetchPast7Days };

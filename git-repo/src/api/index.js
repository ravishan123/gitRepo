import axios from 'axios';

const API_URL = "https://api.github.com/search/repositories?q=created:2021-08-04T00:00:00%2B05:30..2021-08-11T00:00:00%2B05:32&sort=stars&order=desc"


const API = axios.create({ baseURL: API_URL, timeout: 40000 });

export const fetchRepos = () => API.get('/'); 
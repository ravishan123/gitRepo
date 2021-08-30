import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Fuckme = () => {
    const period = useSelector(state=> state.period);
    return period
}

var today = new Date().toISOString().slice(0, 10);
var back = new Date();
var days = 86400000 




var fiveDaysAgo = new Date(back - (9*days)).toISOString().slice(0, 10);




console.log("Today"+today);
console.log(fiveDaysAgo)

const API_URL = "https://api.github.com/search/repositories?q=created:"+fiveDaysAgo+"T00:00:00%2B05:30.."+today+"T00:00:00%2B05:32&sort=stars&order=desc"


const API = axios.create({ baseURL: API_URL, timeout: 40000 });





export const fetchRepos = () => API.get('/'); 

export const fetchReposForDays = (x) => {
    var fiveDaysAgo = new Date(back - (x*days)).toISOString().slice(0, 10);
    const API_URL = "https://api.github.com/search/repositories?q=created:"+fiveDaysAgo+"T00:00:00%2B05:30.."+today+"T00:00:00%2B05:32&sort=stars&order=desc"
    const API = axios.create({ baseURL: API_URL, timeout: 40000 });
    return API.get('/')
}


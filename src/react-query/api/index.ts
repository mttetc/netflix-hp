import axios from 'axios'

const baseApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.REACT_APP_TOKEN || ''
}})

baseApi.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['api_key'] = process.env.REACT_APP_PUBLIC_TMDB_API_KEY;
    config.params['language'] = navigator.language;
    
    return config;
});

export default baseApi
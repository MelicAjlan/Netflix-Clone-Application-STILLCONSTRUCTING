import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/550?api_key=4e42554dc9ad5bc696bae4c92719bc92",
});

export default instance;
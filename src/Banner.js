import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from "./Axios";
import requests from "./Requests";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.lenght - 1)
                ]
            )
            return request;
        }

        fetchData();
    }, []);

    console.log(movie);


    function truncate(string, n) {
        return string?.lenght > n ? string.substr(0, n - 1) + "..." : string;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg${movie}")`,
                backgroundPosition: "center center",
            }}>

            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(
                        `This is a test description This is a test description
                    This is a test descriptionThis is a test description
                    This is a test descriptionThis is a test description
                    This is a test descriptionThis is a test description
                    This is a test descriptionThis is a test description 
                    This is a test descriptionThis is a test description 
                    This is a test descriptionThis is a test description 
                    This is a test descriptionThis is a test description`,
                        100
                    )}
                </h1>
            </div>

            <div className="banner--fadeButton" />

        </header>
    )
}

export default Banner
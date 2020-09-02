import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);
     const thirtyCountries = countries.slice(0,30)

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    // console.log(thirtyCountries)
    return (
        <div>
            <h1>Country: {thirtyCountries.length}</h1>
            {
                thirtyCountries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;
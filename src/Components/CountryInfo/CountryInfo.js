import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './CountryInfo.css';

const CountryInfo = () => {

    const {countryName} = useParams();
    const [country, setCountry]= useState({});
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    })
        console.log(country)
    return (
        <div className="info-decoration">
            <h1>Information about: {country.name}</h1>
            <h2>Population: {country.population}</h2>
        </div>
    );
};

export default CountryInfo;
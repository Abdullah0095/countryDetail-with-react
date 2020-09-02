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
            <h1>Information about:</h1>
            <h2> {country.name}</h2>
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>
            <p>Nationality: {country.demonym}</p>
            <p>Sub-region: {country.subregion}</p>
            <p>Area: {country.area} sq. km</p>
        </div>
    );
};

export default CountryInfo;
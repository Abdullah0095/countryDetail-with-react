import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name} = props.country;

    const countryStyle = {
            color: 'gray',
            border:'2px solid maroon',
            margin: '50px',
            padding: '10px',
            borderRadius: '10px',
            textAlign: 'center',
            width: '300px',
            height: '200px',
            float: 'left'
    }
    return (
        
        <div style={countryStyle}>
            <h1>{name}</h1>
            <p><Link to={`/country/${name}`}>
                <button>Detail info</button>
                </Link></p>
            
 
        </div>
    );
};

export default Country;
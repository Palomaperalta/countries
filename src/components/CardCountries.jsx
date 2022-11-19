import React, {useState, useEffect} from 'react';
import './CardCountries.css';

function CardCountries({country}){
 
return (
    <div className='card'>
        <div className='flag'><img src={country.flags.svg} alt="img"/></div>
        <div className='name'>{country.name.common}</div>
        <div className='caracteristica'>
            <span>Capital:</span>
            <span>{country.capital ? country.capital[0] : null}</span>
        </div>
        <div className='caracteristica'>
            <span>Population:</span>
            <span>{country.population.toLocaleString()}</span>
        </div>
        <div className='caracteristica'>
            <span>Languages:</span>
            {country.languages ? Object.values(country.languages).map(language => {
                return <span>{language}</span>
            }) : null}
        </div>
    </div>
)
}

export default CardCountries;

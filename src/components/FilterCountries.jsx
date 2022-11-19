import  React, {useState} from 'react';
import './FilterCountries.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'

function FilterCountries({setCountries, getCountries, divref}){
    const [filters, setFilters] = useState('')

    async function getCountriesByName(name){
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        const countriesbyname = await response.json()
        setCountries(countriesbyname)
    }

    const handleOnChange = (e) =>{
        if (e.target.value !== ''){
            getCountriesByName(e.target.value)
        }else{
            getCountries()
        }
        setFilters(e.target.value)
        
    }

    const handleOnClick = (e) =>{
        divref.current?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className='div-input' >
            <input className='search-input' type="text" value={filters}
            placeholder="Search countries by name" 
            onChange={handleOnChange}
            />
            <div className='divbutton'>
            <button className='buttonrankings' onClick={handleOnClick}>
                <FontAwesomeIcon className='icon' icon={faRankingStar} />
            </button>
            </div>
        </div>
    )
}
export default FilterCountries;



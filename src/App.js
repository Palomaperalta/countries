import './App.css';
import Title from './components/Title';
import CardCountries from './components/CardCountries';
import FilterCountries from './components/FilterCountries'
import { useState, useEffect, useRef } from 'react';
import Rankings from './components/Rankings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'


function App() {
  const ref = useRef(null);
  const refTitle = useRef(null);
  const [countries, setCountries] = useState([])

  async function getCountries() {
     const response = await fetch('https://restcountries.com/v3.1/all')
     const responsecountries = await response.json()
     setCountries(responsecountries)
 }

  useEffect(() =>{
    getCountries()
  }, [])

  return (
    <>
      <div ref={refTitle}>
        <Title totalCountries={countries.length}></Title>
      </div>
      <FilterCountries setCountries={setCountries} getCountries={getCountries} divref={ref}></FilterCountries>
      <div className='cardcontainer'>
        {countries.map(country =>{
          return <CardCountries country={country}></CardCountries>
        })}
      </div>
      <div ref={ref}>
        <Rankings countries={countries}></Rankings>
      </div>
      <div className='arrow'>
          <FontAwesomeIcon onClick={()=>{refTitle.current?.scrollIntoView({behavior: 'smooth'})}} icon={faArrowAltCircleUp} />
      </div>
    </>
  );
}

export default App;

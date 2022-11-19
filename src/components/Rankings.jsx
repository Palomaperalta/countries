import  React, {useState, useEffect} from 'react';
import './Rankings.css'
import RankingItem from './RankingItem';

function Rankings({countries}){
    const [population, setPopulation] = useState([])
    const [showPopulation, setShowPopulation] = useState(true)
    const [languages, setLanguages] = useState([])


    function getPopulation(){
        const populationcountries = countries.map(country =>{
            return {population: country.population,
                    name: country.name.common
                    }
        
        }).sort(function compareNumbers(a, b) {
            return b.population - a.population;
        }).slice(0,10)

        setPopulation(populationcountries)
    }

    function getLanguages(){
        const languagescountries = countries.reduce((acc, country) => {
            if(country?.languages){
                if(acc.length === 0){
                    const newlanguage = {language: Object.values(country?.languages)[0], total: 1 }
                    acc.push(newlanguage)
                } else{
                    const foundlanguage = acc.find(item => {
                        return item.language === Object.values(country?.languages)[0]
                    })
                    if(foundlanguage){
                        foundlanguage.total = foundlanguage.total + 1
                    } else{
                        const newlanguage = {language: Object.values(country?.languages)[0], total: 1 }
                        acc.push(newlanguage)
                    }
                }
            }
            return acc
        }, []).sort(function compareNumbers(a, b) {
            return b.total - a.total;
        }).slice(0,10)
        setLanguages(languagescountries)

        console.log(languages)
    }

    function getLanguagesV2(){
        const countrylanguages = countries.map(country =>{
            return country?.languages && Object.values(country?.languages)[0]
        }).reduce((acc, countrylanguage)=>{
            if(acc.length === 0){
                const newlanguage = {language: countrylanguage, total: 1}
                acc.push(newlanguage)
            }else{
                const foundlanguage = acc.find(item =>{
                    return item.language === countrylanguage
                })
                if(foundlanguage){
                    foundlanguage.total = foundlanguage.total + 1
                } else{
                    const newlanguage = {language: countrylanguage, total: 1}
                    acc.push(newlanguage)
                }
            }
            return acc
        } ,[]).sort(function compareNumbers(a, b) {
            return b.total - a.total;
        }).slice(0,10)
        setLanguages(countrylanguages)
        console.log(countrylanguages)
    }

    useEffect(() =>{
        getPopulation()
        getLanguagesV2()
    }, [countries])

    const handleOnClickPopulation = (e) =>{
        setShowPopulation(true)
    }

    const handleOnClickLanguage = (e) =>{
        setShowPopulation(false)
    }

    return (
        <>
            <div className='buttonranking'>
                <button onClick={handleOnClickPopulation}>
                    Population
                </button>
                <button onClick={handleOnClickLanguage}>
                    Languages
                </button>
            </div>
            <div className='rankingdescription'>
                { showPopulation ? <span>10 Most populated countries in the world</span>
                : <span>10 Most spoken languages in the world</span>}
            </div>
            <div className='rankings'>
                {showPopulation ? 
                    population.map(country=>{
                        return (
                            <RankingItem key={country.name} llave={country.name} value={country.population.toLocaleString()}></RankingItem>
                    )}) : languages.map(language =>{
                        return (
                            <RankingItem key={language.language} llave={language.language} value={language.total}></RankingItem>
                        )})
                }
            </div>
            
            
        </>
           
    )
}

export default Rankings;

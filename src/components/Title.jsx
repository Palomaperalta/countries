import React from 'react';
import './Title.css'

function Title({totalCountries}) {
    return (
        <div className='title'>
            <h2> World Countries Data</h2>
            <p>Currently, we have {totalCountries} countries</p>
        </div>
        
    )
}

export default Title;
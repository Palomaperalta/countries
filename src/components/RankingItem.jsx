import  React from 'react';
import './RankingItem.css'

function RankingItem({llave, value}){
 return(
    <div>
        <span className='populationname'>{llave}:</span>
        <span className='populationnumber'>{value}</span>
    </div>         
 )
}
export default RankingItem;
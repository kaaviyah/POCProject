import React from 'react'
import { CardsData } from '../../Data/data';
import Card from '../Card/Card';
import './Cards.css'
const Cards=()=>{
    return(
        <div className='Cards'>
            {
                CardsData.map((card, id)=>
                {
                return(
                    <div className='ParentContainer'>
                        <Card
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        value={card.value}
                        png={card.png}
                        series={card.series}
                        
                        
                        />

                    </div>
                )})
            }
        </div>
    )
}
export default Cards;
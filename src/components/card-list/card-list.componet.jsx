import React from 'react';
import './card-list.styles.css';
import {Card} from "../card/card.component";


export const CardList = props => {
    return <div className='card-list'>{
        props.characters.map(charecter =>
            <Card key={charecter.id} charecter={charecter}/>)
    }</div>
}
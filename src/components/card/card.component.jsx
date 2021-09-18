import React from 'react';
import './card.styles.css'

export const Card = (props) => {
    return <div className={'card-container'}>
        <img alt='character' src={props.charecter.imageUrl} width={190} height={220} />
        <h2>{props.charecter.fullName}</h2>
        <p>{props.charecter.title}</p>
        <p>{props.charecter.family}</p>
    </div>
}
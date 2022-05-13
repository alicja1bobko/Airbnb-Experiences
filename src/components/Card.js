import React from "react";
import star from '../images/star.png';


export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === "Online") {
        badgeText = 'ONLINE'
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../../public/images/${props.img}`)} alt="katie zaferes" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="star" className="card--star" /> 
                <span>{ props.rating}</span>
                 <span className="gray">({props.reviewCount})	&#8226;</span>
                <span className="gray">{props.location}</span>
             </div>
                <p className="card--title">{props.title} </p>
                <p className="card--price"><span className="bold">From ${ props.price} </span>/ person</p>
        </div>
    )
}
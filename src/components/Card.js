import React from "react";
import star from '../images/star.png';


export default function Card(props) {
    const {openSpots, location, coverImg, stats, title, price } = props;
    let badgeText;
    if (openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (location === "Online") {
        badgeText = 'ONLINE'
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../../public/images/${coverImg}`)} alt="katie zaferes" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="star" className="card--star" /> 
                <span>{stats.rating}</span>
                 <span className="gray">({stats.reviewCount})	&#8226;</span>
                <span className="gray">{location}</span>
             </div>
                <p className="card--title">{title} </p>
                <p className="card--price"><span className="bold">From ${price} </span>/ person</p>
        </div>
    )
}
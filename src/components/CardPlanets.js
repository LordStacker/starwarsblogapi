import React from "react";
import { Link } from "react-router-dom";


const CardPlanets = (props) => {

    return (
        <div className="card">
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">
                    Atmosphere: {props.data.terrain}
                </p>
                <Link to="/" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    );
}

export default CardPlanets;
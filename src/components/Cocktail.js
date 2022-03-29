import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail({ image, name, id, info, glass }) {
    return (
        <Link to={`/cocktail/${id}`}>
            <article className="cocktail">
                <div className="img-container">
                    <img src={image} alt={name} />
                </div>
                <div className="cocktail-footer">
                    <h3>{name}</h3>
                    <h4>{glass}</h4>
                    <h4>{info}</h4>
                </div>
            </article>
        </Link>
    )
}
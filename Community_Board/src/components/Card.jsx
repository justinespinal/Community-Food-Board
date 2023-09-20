import React from "react";

const Card = (props) => {
    return (
        <div class="wholeCard">
            <div className="foodCard">
                <img src={props.src} className="imageHolder"></img>
                <div className="titleHolder">
                    <h3>{props.name}</h3>
                    <h4>{props.type}</h4>
                    <a href={props.menu}>
                        <button>View Menu</button>
                    </a>
                </div>
            </div>
        </div>
        )
}

export default Card;
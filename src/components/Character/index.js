import React, { Component } from "react";

function Character(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.name)}/>
            </div>
        </div>
    );
}

export default Character;
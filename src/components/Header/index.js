import React, { Component } from "react";
import Footer from "../Footer";

function Header(props) {
    return (
        <div>
            {props.characters.map(item => (
                <img src={item.imageURL} key={item.id}/>
            ))}
        <Footer/>
    </div>
    );
}

export default Header;
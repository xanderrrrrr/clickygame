import React, { Component } from "react";
import Footer from "../Footer";

class Header extends Component {
    // this will set the initial state
    state = {
        clicked: ""
    }

    render() {
        return (
            <div>
                <img src="images/bob.webp"/>
                <img src="images/linda.webp"/>
                <img src="images/frond.webp"/>
                <img src="images/gene.webp"/>
                <img src="images/jimmy_jr.webp"/>
                <img src="images/jimmy_pesto.webp"/>
                <img src="images/louise.webp"/>
                <img src="images/mort.webp"/>
                <img src="images/teddy.webp"/>
                <img src="images/tina.webp"/>
                <Footer/>
            </div>
        );
    }
}

export default Header;
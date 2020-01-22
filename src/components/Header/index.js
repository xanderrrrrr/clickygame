import React, { Component } from "react";

class Header extends Component {
    // this will set the initial state
    state = {
        clicked: ""
    }

    render() {
        return (
            <div>
                <img src="images/bob.png"/>
            </div>
        );
    }
}

export default Header;
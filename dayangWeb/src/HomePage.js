import React, { Component } from 'react';
import md5 from "react-native-md5";
import './HomePage.css';

var HomePage = React.createClass({
    handleClick: function() {
        console.info("dianji");
    },
    render: function() {
        return (
            <div className="Container1">
                <div className="LogoImage">
                    <img src="logo.png" width="200" height="200"/>
                    <h1>
                        大羊健康管理                     
                    </h1>
                </div>
                <div className="InputBase">
                    <input
                        className="NameInput"
                        type="text"
                     />
                    <input
                        className="NameInput"
                        type="text"
                     />
                     <button className="Button"
                         onClick={this.handleClick}
                         name="button">
                         登录
                     </button>
                </div>
            </div>
        );
    }
});

export default HomePage; 

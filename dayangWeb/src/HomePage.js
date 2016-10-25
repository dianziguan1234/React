import React, { Component } from 'react';
import md5 from "react-native-md5";
import './HomePage.css';
import dylogo from './dylogo.png'


var HomePage = React.createClass({
    handleClick: function() {
        console.info("dianji");
    },
    render: function() {
        return (
            <div className="Container">
                <div className="LogoImage">
                    <div>
                        <img  src={dylogo} width="120" height="120"/>
                    </div>
                    <div className="DayangText">
                        大羊健康管理
                    </div>
                </div>
                <div className="InputBase">
                    <div className="DengLu">
                        gwv
                    </div>
                    <div>
                        gwv
                    </div>
                </div>
            </div>
        );
    }
});

export default HomePage; 

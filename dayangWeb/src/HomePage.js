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
                <div className="Base">
                    <div className="LogoImage">
                        <div className="Logo">
                            <img className="Image"  src={dylogo} width="120" height="120"/>
                        </div>
                        <div className="DayangText">
                            大羊健康管理
                        </div>
                    </div>
                    <div className="Seprate">
                    </div>
                    <div className="InputBase">
                        <div className="DengLu">
                            登陆
                        </div>
                        <input type="text"
                            placeholder="请输入用户名"
                            className="NamePut">
                        </input>
                        <input type="text"
                            placeholder="请输入密码"
                            className="NamePut">
                        </input>
                        <div className="Remenber">
                            记住我
                        </div>
                        <button className="Button" name="button">
                            登陆
                        </button>
                    </div>
                </div>
            </div>
        );
    }
});

export default HomePage; 

import React, { Component } from 'react';
import './Detail.css';
import Bed from './Bed';

var DetailPage = React.createClass({
    render: function() {
        let a = [1,2,3,4,5,6]
        let b = a.map(value => {
            return <Bed/>
        })

        return(
            <div className="BaseContainer">
                <div className="First">
                    <button className="button button1">
                        用户名
                    </button>   
                    <button className="button button1">
                        设备
                    </button>   
                    <button className="button button1">
                        退出
                    </button>   
                </div>
                <div className="Second">
                </div>
                <div className="Three">
                    {b}
                </div>
            </div>
        );
    }
});
export default DetailPage;

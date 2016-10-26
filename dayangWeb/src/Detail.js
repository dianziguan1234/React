import React, { Component } from 'react';
import './Detail.css';
import Bed from './Bed';

var DetailPage = React.createClass({
    render: function() {
        let a = [1,2,3,4,5,6]
        let c = ["gwc","gwc2","gwc3","gwc4","gwc5","gwc6"]
        let b = c.map(value => {
            return <Bed name={value}/>
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
                    <div className="describeText">
                        总床位数 掉线 入住人数 告警
                    </div>
                </div>
                <div className="Three">
                    {b}
                </div>
            </div>
        );
    }
});
export default DetailPage;

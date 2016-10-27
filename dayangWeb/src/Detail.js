import React, { Component } from 'react';
import './Detail.css';
import Bed from './Bed';

var DetailPage = React.createClass({
    getInitialState: function() {
        var listArray = [];
        return {
                "users":{listArray}
        }
    },
    componentDidMount: function() {
        console.info("Did Mount");
        var urlstr = "http://rd.dayangdata.com:10000/gateway/guardians/";
        urlstr = urlstr.concat(this.props.passgurdian);
        urlstr = urlstr.concat("/users");
        console.info("拼接后的字符串",urlstr);
        var tokenStr="Bear ";
        tokenStr = tokenStr.concat(this.props.passtoken);
        fetch(urlstr, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization":tokenStr
            },
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.info("data",responseData.users);
            this.setState({
                users:responseData.users});

        }) .catch((error) => {
            console.info("error",error);
        });
        console.info("用户列表",this.state.users);

    },
    render: function() {
        //console.info("tokennnnnnnn",this.props.passtoken);
        //console.info("guardianId",this.props.passgurdian);
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

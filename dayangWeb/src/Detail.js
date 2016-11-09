import React, { Component } from 'react';
import './Detail.css'
import Bed from './Bed';

var DetailPage = React.createClass({
    getInitialState: function() {
        //var listArray = [];
        return {
            isEdit:false,
            users:[],
            devices:[],
            totoalPeople:0
        }
    },
    getData: function(recive) {
        console.info("reciveData",recive)
    },
    componentDidMount: function() {
        console.info("Did Mount");
        var name = "Bob", time = "today";
        var string =`Hello ${name}, how are you ${time}?`
        console.info("string",string)
        var guardID=this.props.passgurdian
        var urlstr = `http://api.51aijia.ren:10000/gateway/guardians/${guardID}/users`;
        //urlstr = urlstr.concat(this.props.passgurdian);
        //urlstr = urlstr.concat("/users");
        var urldevice = "http://api.51aijia.ren:10000/gateway/guardians/";
        urldevice = urldevice.concat(this.props.passgurdian);
        urldevice = urldevice.concat("/devices");
        console.info("拼接后的字符串",urlstr);
        var tokenStr="Bear ";
        tokenStr = tokenStr.concat(this.props.passtoken);
        //获取所有的用户
        fetch(urlstr, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization":tokenStr
            },
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.info("userdata",responseData.users);
            this.setState({
                users:responseData.users});

        }) .catch((error) => {
            console.info("error",error);
        });
        //获取所有的设备
        fetch(urldevice, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization":tokenStr
            },
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.info("devicedata",responseData.devices);
            this.setState({
                devices:responseData.devices});

        }) .catch((error) => {
            console.info("error",error);
        });

    },
    render: function() {
        //console.info("tokennnnnnnn",this.props.passtoken);
        //console.info("guardianId",this.props.passgurdian);
        let a = [1,2,3,4,5,6]
        //let c = ["gwc","gwc2","gwc3","gwc4","gwc5","gwc6"]
        let c = this.state.users 
        let b = c.map(value => {
            console.info("valuevalue",value);
            return <Bed callBack={this.getData} data={value} key={value.id} name={value.name} heartbeatLowerAlarm={value.heartbeatLowerAlarm} sex={value.sex} breathLowerAlarm={value.breathLowerAlarm}/>
        })

        console.info("用户列表",this.state.users);
        console.info("设备列表",this.state.devices);
        var describle = "总床位数";
        describle = describle.concat(this.state.devices.length);
        describle = describle.concat("掉线入住人数告警");
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
                        {describle}
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

import React, { Component } from 'react';
//import hex_md5 from './MD5';
import md5 from "react-native-md5";

var LoginPage = React.createClass({
    setRequest: function () {
        //var body = {"name": "szdac","password":"8ddcff3a80f4189ca1c9d4d902c3c909"};
        console.info("账号",this.state.nameIputText);
        console.info("密码",this.state.passIputText);
        var passw = md5.hex_md5(String(this.state.passIputText));
        console.info("md5加密后字符串",passw);
        var body = {"name": this.state.nameIputText,"password":passw};
        fetch("http://api.51aijia.ren:10000/gateway/sessions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.info("data",responseData);
            this.setState({
                response:responseData
            });
        })
        .catch((error) => {
            console.info("error",error);
        });
    },
    getInitialState: function () {
        return {
            nameIputText:"",
            passIputText:"",
            response: {
                "guardianId":"",
                "token":"",
                "type":""
            }
        };
    },
    handleSubmit: function () {
        console.info("name",this.state.nameIputText,"passWord",this.state.passIputText);
    },
    handleNameIput: function (event) {
        this.setState({
            nameIputText:event.target.value
        })
    },
    handlePassIput: function (event) {
        this.setState({
            passIputText:event.target.value
        })
    },
    render: function () {
        return (
            <div>
                <input 
                    value={this.state.nameIputText}
                    onChange={this.handleNameIput}
                    type="text" />
                <br />
                <input 
                    value={this.state.passIputText}
                    onChange={this.handlePassIput}
                    type="text" />
                <br />
                <input 
                    type="button" 
                    onClick={this.setRequest} />
                <h1>
                    {this.state.response.guardianId}
                    <br />
                    {this.state.response.token}
                    <br />
                    {this.state.response.type}
                </h1>
            </div>
        );
    }
});

export default LoginPage;

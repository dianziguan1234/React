import React, { Component } from 'react';
import '../HomePage.css';
import dylogo from '../dylogo.png';
import md5 from "react-native-md5";
//import DetailPage from '../Detail.js';
import {btnClick,test} from '../actions/BtnClickAction'
//import Reducer from '../reducers'
//import { createStore } from 'redux'

var HomePage = React.createClass({
    getInitialState: function() {
        return {
            nameText:"",
            passText:"",
            isLogined:false,
            response: {
                "guardianId":"",
                "token":"",
                "type":""
            }

        }
    },
    componentDidMount: function() {
        console.info("didMount")
        console.info("this.HomeState",this.props.HomeState)
        console.info("this.HomeDispatch",this.props.HomeDispatch)
    },
    onChangeNameValue: function(event) {
        this.setState({nameText:event.target.value});
    },
    onChangePassValue: function(event) {
        this.setState({passText:event.target.value});
    },
    handleClick: function() {
        console.info("dianji");
        console.info("name",this.state.nameText,"password",this.state.passText);
    },
    setRequest: function () {
        //var body = {"name": "szdac","password":"8ddcff3a80f4189ca1c9d4d902c3c909"};
        console.info("账号",this.state.nameText);
        console.info("密码",this.state.passText);
        var passw = md5.hex_md5(String(this.state.passText));
        console.info("md5加密后字符串",passw);
        var body = {"name": this.state.nameText,"password":passw};
        //fetch("http://api.51aijia.ren:10000/gateway/sessions", {
        fetch("http://rd.dayangdata.com:10000/gateway/sessions", {
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
            // if(responseData.token) {
            //     console.info("token");
            //     this.setState({isLogined:true});
            // }else{
            //     console.info("notoken");
            // }
            //document.getElementById("root").style.visibility="hidden";
            console.info(this.state.nameText)
            console.info(this.state.passText)
             var disAction = btnClick(this.state.nameText,this.state.passText,responseData)
            console.info(disAction)
            //var testaction = test("123","456")
            //console.info(testaction) 
            if(responseData.token) {
            this.props.HomeDispatch(this.state.nameText,this.state.passText,responseData,true)
            }
        })
        .catch((error) => {
            console.info("error",error);
        });
    },
    render: function() {
        console.info("刷新之后的this.HomeState",this.props.HomeState)
        // if(this.props.HomeState.reducer.isLogined) {
        //     //console.info("token",this.state.response.guardianId);
        //     return(
        //         <DetailPage 
        //             passtoken={this.state.response.token} 
        //             passgurdian={this.state.response.guardianId} >
        //         </DetailPage>
        //     );
        //}else{
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
                            onChange={this.onChangeNameValue}
                            value={this.state.nameText}
                            className="NamePut">
                        </input>
                        <input type="text"
                            placeholder="请输入密码"
                            onChange={this.onChangePassValue}
                            value={this.state.passText}
                            className="NamePut">
                        </input>
                        <div className="Remenber">
                            记住我
                        </div>
                        <button className="Button" name="button"
                            onClick={this.setRequest}>
                            登录
                        </button>
                    </div>
                </div>
            </div>
        );
            //}
    }
});

export default HomePage; 

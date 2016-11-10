import React, { Component } from 'react';
import './Detail.css'
import Bed from './Bed';
import './PersonInfo.css';

var DetailPage = React.createClass({
    getInitialState: function() {
        //var listArray = [];
        return {
            nameTextField:"",
            ageTextField:"",
            cardIdNoField:"",
            birthdayField:"",
            isEdit:false,
            isNeedBack:false,
            users:[],
            devices:[],
            totoalPeople:0,
            personInfo:{},
            sex:"",
            token:""
        }
    },
    getData: function(recive) {
        // console.info("reciveData",recive)
        if(recive) {
            this.setState({
                isEdit: true,
                personInfo:recive
            });
        }
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
        this.setState({
            token:tokenStr
        })
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
    onChangeNameValue: function(e) {
        this.setState({
            nameTextField:e.target.value
        });
    },
    onChangeAgeValue: function(e) {
        this.setState({
            ageTextField:e.target.value
        });
    },
    onChangeCardIdValue: function(e) {
        this.setState({
            cardIdNoField:e.target.value
        });
    },
    onChangeBirthdayValue: function(e) {
        this.setState({
            birthdayField:e.target.value
        });
    },
    handleCancle: function () {
        console.info("quxiao")
        this.setState({
            isEdit:false
        })
    },
    editUser: function () {
        var guardID = this.state.personInfo.guardianId
        var userID = this.state.personInfo.id
        var urlstr = `http://api.51aijia.ren:10000/gateway/guardians/${guardID}/users/${userID}`
        var body = {
            "name":this.state.nameTextField,
            "birthday":this.state.birthdayField,
            "sex":this.state.ageTextField,
        }
        fetch(urlstr, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization":this.state.token
            },
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
       .then((responseData) => {
            console.info("修改用户资料",responseData);
            this.setState({
                //response:responseData
            });
        })
        .catch((error) => {
            console.info("error",error);
        });
 
    },
    handleSubmit: function () {
        console.info("queren")
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
        if(this.state.isEdit){
            console.info(this.state.personInfo.id)
            return(
                <div className="BaseContainer">
                    <div className="PerContainer">
                        <h3>
                            名字
                        </h3>
                    <input type="text"
                        onChange={this.onChangeNameValue}
                        value={this.state.nameTextField ? this.state.nameTextField : this.state.personInfo.name}
                        className="PerNameInput">
                    </input>
                    </div>
                    <div className="PerContainer">
                        <h3>
                            性别
                        </h3>
                    <input type="text"
                        onChange={this.onChangeAgeValue}
                        value={this.state.ageTextField ? this.state.ageTextField : this.state.personInfo.sex}
                        className="PerNameInput">
                    </input>
                    </div>
                    <div className="PerContainer">
                        <h3>
                            号码
                        </h3>
                    <input type="text"
                        onChange={this.onChangeCardIdValue}
                        value={this.state.cardIdNoField ? this.state.cardIdNoField:this.state.personInfo.cardId}
                        className="PerNameInput">
                    </input>
                    </div>
                    <div className="PerContainer">
                        <h3>
                            生日
                        </h3>
                    <input type="text"
                        onChange={this.onChangeBirthdayValue}
                        value={this.state.birthdayField ? this.state.birthdayField:this.state.personInfo.birthday}
                        className="PerNameInput">
                    </input>
                    </div>
                    <div className="Bottom">
                        <button className="PButton"
                        onClick={this.handleCancle}
                        name="button">
                        取消
                    </button>
                    <button className="PButton"
                        onClick={this.handleSubmit}
                        name="button">
                        确认
                    </button>

                    </div>
                </div>
            );
        }else{
            return( <div className="BaseContainer">
                    <div className="First">
                        <button className="button button1"> 用户名
                        </button>   
                        <button className="button button1">
                            设备
                        </button>   <button className="button button1">
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
    }
});
export default DetailPage;

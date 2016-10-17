import React, { Component } from 'react';

var LoginPage = React.createClass({
    // setRequest: function (){
    //     //POST方式
    //     fetch("http://api.51aijia.ren:10000/gateway/sessions", {
    //         method: "POST",
    //         mode: "cors",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: {
    //             //"name":this.state.nameIputText,
    //             "name":"szdac",
    //             //"password":this.state.passIputText
    //             "password":"8ddcff3a80f4189ca1c9d4d902c3c909"
    //         } 
    //     }).then(function (res) {
    //         console.log("fetch request ", JSON.stringify(res.ok));
    //         if(res.ok){
    //             res.json().then(function (json) {
    //                 console.info(json);
    //             });
    //         }else{
    //            console.log("请求失败");
    //         }

    //     }).catch(function (e) {
    //         console.log("fetch fail");
    //     });
    // },
    setRequest: function () {
        var body = {"name": "szdac","password":"8ddcff3a80f4189ca1c9d4d902c3c909"};
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
            response:[]
        };
    },
    handleSubmit: function () {
        console.info("name",this.state.nameIputText,"passWord",this.state.passIputText);
        this.setRequest;
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
                {this.state.response}
                console.info("res",this.state.response)
            </div>
        );
    }
});

export default LoginPage;

import React, { Component } from 'react';
import Son from './LLogin';
import './LLogin.css';

var Parent = React.createClass({
    getInitialState:function() {
        return {
            title:"title",
            detailTittle:"detailTitle"
        }
    },
    callBack:function(one,two) {
        console.info("one的值是",one,"two的值是",two);
        this.setState({
            title:one,
            detailTittle:two
        })
        //this.setState.title = "Hello" 将不会出发render函数，不导致刷新
        
    },
    render: function () {
        console.info("========stateChange",this.state.title)
        console.info("========stateChange",this.state.detailTittle)
        return (
            //<div className="Maincontainer">
            <Son sendDataToParent = {this.callBack}>
            </Son>
            //</div>
        );
    }
})
export default Parent;

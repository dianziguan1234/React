import React, { Component } from 'react';
import Son from './LLogin';
import './LLogin.css';

var Parent = React.createClass({
    callBack:function(one,two) {
        console.info("one的值是",one,"two的值是",two);
    },
    render: function () {
        return (
            //<div className="Maincontainer">
            <Son sendDataToParent = {this.callBack}>
            </Son>
            //</div>
        );
    }
})
export default Parent;

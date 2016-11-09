import React, { Component } from 'react';
import Son from './LLogin';

var Parent = React.createClass({
    callBack:function(one,two) {
        console.info("one的值是",one,"two的值是",two);
    },
    render: function () {
        return (
            <Son sendDataToParent = {this.callBack}>
            </Son>
        );
    }
})
export default Parent;

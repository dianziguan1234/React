import React, { Component } from 'react';
import './Detail.css';
import Bed from './Bed';

var DetailPage = React.createClass({
    render: function() {
        let a = [1,2,3,4,5,6]
        let b = a.map(value => {
            return <Bed/>
        })

        return(
            <div className="BaseContainer">
                {b}
            </div>
        );
    }
});
export default DetailPage;

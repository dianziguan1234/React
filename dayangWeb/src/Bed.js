import React, { Component } from 'react';
import './Detail.css';

var BedBlock = React.createClass({
    render: function() {
        return(
            <div className="floating-box">
                {this.props.name}
            </div>
        );
    }
});

export default BedBlock;

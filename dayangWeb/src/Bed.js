import React, { Component } from 'react';
import './Detail.css';
import './Bed.css';
import beat from './beat.png';
import breath from './breath.png';
import offbed from './offbed.png';


var BedBlock = React.createClass({
    handleClick: function() {
        console.info(this.props.name);
    },
    render: function() {
        return(
            <div onClick={this.handleClick} className="floating-box">
                <div className="name">
                    {this.props.name}
                </div>
                <div className="DivImage">
                    <img src={beat} width="30" height="30" />
                    <div className="centerPic">
                        <img src={offbed} width="38" height="38" />
                    </div>
                    <img src={breath} width="30" height="30" />
                </div>
                <div className="bottom">
                    <div className="datadescribe">
                        {this.props.heartbeatLowerAlarm}
                    </div>
                    <div className="datadescribe">
                        {this.props.sex}
                    </div>
                    <div className="datadescribe">
                        {this.props.breathLowerAlarm}
                    </div>
                </div>
            </div>
        );
    }
});

export default BedBlock;

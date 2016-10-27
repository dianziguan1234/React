import React, { Component } from 'react';
import './Detail.css';
import './Bed.css';
import beat from './beat.png';
import breath from './breath.png';
import offbed from './offbed.png';


var BedBlock = React.createClass({
    render: function() {
        return(
            <div className="floating-box">
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
                        gwc
                    </div>
                    <div className="datadescribe">
                        gwc
                    </div>
                    <div className="datadescribe">
                        gwc
                    </div>
                </div>
            </div>
        );
    }
});

export default BedBlock;

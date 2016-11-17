import { connect } from 'react-redux'
import React, { Component } from 'react';
import Home from '../components/HomePage'
import {btnClick} from '../actions/BtnClickAction'

// var Home = React.createClass({
//     render:function() {
//         console.info("HomeState")
//         console.info("HomeState",this.props.HomeState)
//         console.info("HomeState",this.props.HomeDispatch)
//         return (
//             <span>
//                 woshiyigehaoren
//             </span>
//         )
//     }
// })

const mapStateToProps = (state) => ({
    HomeState:state
})
const mapDispatchToProps = (dispatch) => ({
    HomeDispatch:(userName,passWord,json) =>{
        dispatch(btnClick(userName,passWord,json))
    }
})
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Home)

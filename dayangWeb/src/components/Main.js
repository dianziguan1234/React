import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from './HomePage'
import Detail from '../Detail'

var Main = React.createClass({
    render: function () {
        console.info("MainState",this.props.MainState)
        return (
            <div>
                gwc
            </div>
        )
    }
})

const mapStateToProps = (state) => ({
    MainState:state
})

//可以选择不dispatch
const mapDispatchToProps = (dispatch) => ({
})

const MainContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(Main)

export default MainContainer

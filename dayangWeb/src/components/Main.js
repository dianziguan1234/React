import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../containers/AppContainer'
import Detail from '../containers/DetailContainer'

var Main = React.createClass({
    render: function () {
        console.info("MainState",this.props.MainState)
        if(!this.props.MainState.reducer.isLogined) {
            return(
                <Home />
            )
        } else {
            return(
                <Detail />
                //<p>
                //    twopage
                //</p>
            )
        }
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

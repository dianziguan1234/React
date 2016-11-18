import { connect } from 'react-redux'
import Detail from '../Detail.js'
import {detailActionCreate} from '../actions/BtnClickAction'

const mapStateToProps = (state) => ({
    DetailState:state
})

const mapDispatchToProps = (dispatch) => ({
    DetailDispatch:(users,devices) => {
        dispatch(detailActionCreate(users,devices))
    }
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Detail)

import { connect } from 'react-redux'
import Detail from '../Detail'
import {detailActionCreate} from '../actions/BtnClickAction'

const mapStateToProps = (state) => ({
    DetailState:state
})

const mapDispatchToProps = (dispatch) => ({
    DetailDispatch:(userJson,deviceJson) => {
        dispatch(detailActionCreate(userJson,deviceJson))
    }
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Detail)

import { connect } from 'react-redux'
import Home from '../components/HomePage'
import {btnClick} from '../actions/BtnClickAction'


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

import {LoginType} from '../constants/ActionType'
const initialState = {
    nameText:"",
    passText:"",
    isLogined:false,
    response: {
        "guardianId":"",
        "token":"",
        "type":""
            }
}

export default function login(state=initialState,action) {
    switch(action.type) {
        case LoginType:
        return{
            nameText:action.userName,
            passText:action.passWord,
            response:action.json
        }
    default:
        return state

    }
}

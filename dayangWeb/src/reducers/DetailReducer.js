import { DetailType } from '../constants/ActionType'

//初始化state
const initialState = {
    users:[],
    devices:[]
}

export default function getUsersDevices (state=initialState,action) {
    switch (action.type) {
        case DetailType:
            return {
            users:action.userJson,
            devices:action.deviceJson
        }
    default:
        return state
    }
}

import actionTypes from '../constants/ActionType'

export const btnClick = (userName,passWord,json) => {
    type:actionTypes.LoginType,
    userName,
    passWord,
    json
}

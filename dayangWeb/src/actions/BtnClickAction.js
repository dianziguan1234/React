import {LoginType,DetailType} from '../constants/ActionType'

export const btnClick = (userName,passWord,json,isLogined) => ({
    type:LoginType,
    userName,
    passWord,
    json,
    isLogined
})
export const test = (userName,passWord) => ({
    userName,
    passWord
})
export const detailActionCreate = (users,devices) => ({
    type:DetailType,
    users,
    devices
})

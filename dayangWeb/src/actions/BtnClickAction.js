import {LoginType} from '../constants/ActionType'

export const btnClick = (userName,passWord,json) => ({
    type:LoginType,
    userName,
    passWord,
    json
})
export const test = (userName,passWord) => ({
    userName,
    passWord
})

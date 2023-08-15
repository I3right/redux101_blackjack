export const SET_BET = 'SET_BET'
export const BETTING = 'BETTING'

export function dispatchBet (param) {
    console.log(param)
    return {
        type: param.type,
        payload: param.payload
    }
}


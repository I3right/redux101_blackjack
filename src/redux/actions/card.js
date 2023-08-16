export const SET_START_GAME = 'SET_START_GAME'
export const SET_DRAW_CARD = 'SET_DRAW_CARD'
export const SET_END_GAME = 'SET_END_GAME'
export const GET_START_GAME = 'GET_START_GAME'
export const GET_DRAW_CARD = 'GET_DRAW_CARD'
export const GET_END_GAME = 'GET_END_GAME'

export function dispatchCard (param) {
    return {
        type: param.type,
        payload: param.payload
    }
}


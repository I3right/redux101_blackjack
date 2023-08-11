export const START_GAME = 'START_GAME'
export const DRAW_CARD = 'DRAW_CARD'
export const STOP = 'STOP'

export function dispatchCard (param) {
    // console.log(param)
    return {
        type: param.type,
        payload: param.payload
    }
}


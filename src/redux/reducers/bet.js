import {SET_BET,BETTING} from "../actions/bet";

const initialState = {
  balance: 100,
  betValue: 0
};

export default function (state = initialState, action) {

  const { type, payload } = action;
  // console.log('type',type);
  // console.log('paylaod',payload);

  switch (type) {
    case SET_BET:
      return {
        ...state,
        betValue: payload.betValue
      };
    case BETTING:
      return {
      ...state,
        balance: payload.balance,
        betValue: state.betValue
      };
    default:
      return state;
  }
}

import {BETTING} from "../actions/bet";

const initialState = {
  balance: 100,
  betValue: 0
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
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

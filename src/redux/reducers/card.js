import { SET_START_GAME, SET_DRAW_CARD, SET_END_GAME } from "../actions/card";

const initialState = {
    dealer: {
      cards: [],
      score: 0,
    },
    player: {
      username: "",
      cards: [],
    score: 0,
    },
    result: "",
    
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_START_GAME:
    case SET_DRAW_CARD:
    case SET_END_GAME :
      return {
        ...state,
        dealer: {
          cards: payload.dealer.cards,
          score: payload.dealer.score,
        },
        player: {
          username: payload.player.username,
          cards: payload.player.cards,
          score: payload.player.score,
        },
        result: payload.result,
      };

    default:
      return state;
  }
}

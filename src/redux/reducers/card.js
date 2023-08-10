import { START_GAME, DRAW_CARD, STOP } from "../actions/card";

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

export default function taskReducer (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "START_GAME":
      return {
        ...state,
        dealer: {
          cards: [...state.dealer.cards, payload.dealer.cards],
          score: payload.dealer.score,
        },
        player: {
          username: payload.player.cards,
          cards: [...state.player.cards, payload.player.cards],
          score: payload.player.score,
        },
        result: payload.result,
      };
      
      
    case "DRAW_CARD":
        return {
          ...state,
          player: {
            username: payload.player.cards,
            cards: [...state.player.cards, payload.player.cards],
            score: payload.player.score,
          },
          result: payload.result,
        };
      
      
    case "STOP":
      return {
        ...state,
        dealer: {
          cards: [...state.dealer.cards, payload.dealer.cards],
          score: payload.dealer.score,
        },
        result: payload.result,
      };

    default:
      return state;
  }
}

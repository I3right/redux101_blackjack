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
  // console.log('reducer state',state);
  // console.log('reducer action',action);

  const { type, payload } = action;
  // console.log(type,payload);

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
      
      // old draw
      //   return {
      //     ...state,
      //     player: {
      //       username: payload.player.username,
      //       cards: payload.player.cards,
      //       score: payload.player.score,
      //     },
      //     result: payload.result,
      //   };
      
      
    
      // return {
      //   ...state,
      //   dealer: {
      //     cards: payload.dealer.cards,
      //     score: payload.dealer.score,
      //   },
      //   result: payload.result,
      // };

    default:
      return state;
  }
}

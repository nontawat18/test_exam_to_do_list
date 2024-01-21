// reducers.js
const initialState = {
    score: 0,
    playerName: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_SCORE_AND_NAME':
        return {
          ...state,
          score: action.payload.score,
          playerName: action.payload.playerName,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
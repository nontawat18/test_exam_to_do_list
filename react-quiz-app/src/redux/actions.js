// actions.js
export const saveScoreAndName = (score, playerName) => ({
    type: 'SAVE_SCORE_AND_NAME',
    payload: { score, playerName },
  });
  
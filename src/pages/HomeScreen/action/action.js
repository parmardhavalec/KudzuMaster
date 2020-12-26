import * as actions from './actiontypes';

export const scoreTeamA = (data) => {
  return {
    type: actions.TEAMA_SCORE,
    payload: data,
  };
};

export const scoreTeamB = (data) => {
  return {
    type: actions.TEAMB_SCORE,
    payload: data,
  };
};

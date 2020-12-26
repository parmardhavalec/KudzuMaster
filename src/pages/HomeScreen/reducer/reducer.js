import * as actions from '../action/actiontypes';

const initialState = {
  score: '',
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.TEAMA_SCORE:
      return {...state, score: payload};

    case actions.TEAMB_SCORE:
        return {...state, score: payload};

    default:
      return state;
  }
};

export default reducer;

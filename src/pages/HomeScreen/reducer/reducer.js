import * as actions from '../action/actiontypes';

const initialState = {
  colorSelected: '',
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.COLOR_SELECTED:
      return {...state, colorSelected: payload};

    default:
      return state;
  }
};

export default reducer;

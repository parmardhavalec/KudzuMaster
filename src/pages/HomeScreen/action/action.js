import * as actions from './actiontypes';

export const selectTheme = (data) => {
  return {
    type: actions.COLOR_SELECTED,
    payload: data,
  };
};

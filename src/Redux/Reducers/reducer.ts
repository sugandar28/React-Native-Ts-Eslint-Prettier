/* eslint-disable import/prefer-default-export */
import { SAY_HI } from '../ActionTypes/actiontypes';

const INITIAL_NAV: any = { SayHi: false };

const demoReducer = (state = INITIAL_NAV, action: any) => {
  switch (action.type) {
    case SAY_HI:
      return { ...state, SayHi: !state.SayHi};
    default:
      return state;
  }
};

export { demoReducer };
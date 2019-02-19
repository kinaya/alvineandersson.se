import matchReducer from './matchReducer';
import {MATCHMAKING} from '../actions/types';
import matchitems from "../data/matchitems.json";

describe('Match reducer', () => {

  // The initial state here should be the matchitems from data folder!
  it('returns initial state when no action is received', () => {
    const newState = matchReducer(undefined, {})
    expect(newState).toEqual({matchitems: matchitems});
  });

  // How to test if the items are updated correctly?
  //it('return correct state when action of type `MATCHMAKING` is received', () => {
  //});

});

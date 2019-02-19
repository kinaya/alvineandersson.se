import projectsReducer from './projectsReducer';
import {FILTER_PROJECTS} from '../actions/types';

describe('Project reducer', () => {

  it('returns initial state when no action is received', () => {
    //const newState = projectsReducer(undefined, {})
    //expect(newState).toEqual([]);
  });

  it('return correct state when action of type `FILTER_PROJECTS` is received', () => {
    const updateAction = {
      type: FILTER_PROJECTS,
      currentFilter: ['a','b','c']
    };
    const expectedResult = {
      currentFilter: ['a','b','c']
    }
    expect(projectsReducer(undefined, updateAction)).toEqual(expectedResult);
  });

});

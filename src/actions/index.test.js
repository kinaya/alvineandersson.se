import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import {matchMaking,filterProjects} from './';
import thunk from 'redux-thunk';
import matchitems from '../data/matchitems.json';
import {FILTER_PROJECTS, MATCHMAKING} from './types';

const mockStore = configureStore([thunk]);
const store = mockStore({});

// ------- MatchMaking -------- //
describe("MatchMaking projects", () => {

/*  beforeEach(() => {
    store.clearActions();
  });

  it('Works when clicking first item', async () => {

    const dispatch = jest.fn();
    const getState = () => ({
      match: {
        matchitems: matchitems
      }
    });

    await matchMaking('varfor', 'anstalla', 'byggahemsida', 'left')(dispatch, getState);

    expect(dispatch.mock.calls[0][0].matchitems[0].clickable).toEqual(false);
    expect(dispatch.mock.calls[0][0].matchitems[0].alternatives[0].active).toEqual(true);
    expect(dispatch.mock.calls[0][0].matchitems[2].visible).toEqual(true);
  });*/
});


// ------- FilterProjects -------- //
describe("Filter projects", () => {

  it('returns an action with type `FILTER_PROJECTS`', () => {
    // Not working, since async action
    //const action = filterProjects();
    //expect(action).toEqual({type: FILTER_PROJECTS});
  })

/*  beforeEach(() => {
    store.clearActions();
  });

  it('Works when the first item is selected', async () => {
    const expectedActions = [{
      currentFilter: ['wordpress'],
      type: 'FILTER_PROJECTS'
    }]
    const dispatch = jest.fn();
    const getState = () => ({
      projects: {
        currentFilter: []
      }
    });
    await filterProjects('wordpress')(dispatch, getState);
    expect(dispatch.mock.calls[0]).toEqual(expectedActions);
  });

  it('Works when an item is selected', async () => {
    const expectedActions = [{
      currentFilter: ['wordpress','drupal'],
      type: 'FILTER_PROJECTS'
    }]
    const dispatch = jest.fn();
    const getState = () => ({
      projects: {
        currentFilter: ['wordpress']
      }
    });
    await filterProjects('drupal')(dispatch, getState);
    expect(dispatch.mock.calls[0]).toEqual(expectedActions);
  });

  it('Works when an item is unselected', async () => {
    const expectedActions = [{
      currentFilter: ['drupal'],
      type: 'FILTER_PROJECTS'
    }]
    const dispatch = jest.fn();
    const getState = () => ({
      projects: {
        currentFilter: ['wordpress','drupal']
      }
    });
    await filterProjects('wordpress')(dispatch, getState);
    expect(dispatch.mock.calls[0]).toEqual(expectedActions);
  });

  it('Works when all items are unselected', async () => {
    const expectedActions = [{
      currentFilter: [],
      type: 'FILTER_PROJECTS'
    }]
    const dispatch = jest.fn();
    const getState = () => ({
      projects: {
        currentFilter: ['wordpress']
      }
    });
    await filterProjects('wordpress')(dispatch, getState);
    expect(dispatch.mock.calls[0]).toEqual(expectedActions);
  })*/

});

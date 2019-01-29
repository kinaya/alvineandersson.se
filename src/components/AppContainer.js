import { connect } from 'react-redux'
import App from './App'
import {withRouter} from 'react-router-dom'
import {navigate, locationChange} from '../actions'

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    direction: state.navigation.direction,
    animation: state.navigation.animation,
    prevPathKey: state.navigation.prevPathKey
  }
}

function mapDispatchToProps(dispatch) {
  return {
    navigate: (direction) => dispatch(navigate(direction)),
    locationChange: (key) => dispatch(locationChange(key))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))

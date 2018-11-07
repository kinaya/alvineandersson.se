import { connect } from 'react-redux'
import App from '../components/App'
import {withRouter} from 'react-router-dom'
import {navigate} from '../actions'

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    direction: state.navigation.direction
  }
}

function mapDispatchToProps(dispatch) {
  return {
    navigate: (direction) => dispatch(navigate(direction))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))

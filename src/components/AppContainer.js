import { connect } from 'react-redux'
import App from './App'
import {withRouter} from 'react-router-dom'

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    //animation: state.navigation.animation,
    animation: state.animation
  }
}

export default withRouter(connect(
  mapStateToProps,
  null
)(App))

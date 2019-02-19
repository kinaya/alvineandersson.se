import { connect } from 'react-redux'
import Projects from './Projects'

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    currentFilter: state.projects.currentFilter,
    animation: state.animation.projects
  }
}

export default connect(
  mapStateToProps,
  null,
)(Projects)

import { connect } from 'react-redux'
import Projects from './Projects'
import { filterProjects } from '../../actions'

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    currentFilter: state.projects.currentFilter,
    animation: state.animation.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterProjects: (filter) => dispatch(filterProjects(filter))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects)

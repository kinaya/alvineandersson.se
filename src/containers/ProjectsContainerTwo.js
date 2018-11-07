import { connect } from 'react-redux'
import ProjectsTwo from '../components/ProjectsTwo'
import { filterProjects, navigate } from '../actions'

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    currentFilter: state.projects.currentFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterProjects: (filter) => dispatch(filterProjects(filter)),
    navigate: (direction) => dispatch(navigate(direction))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectsTwo)

import React from "react";
import { connect } from "react-redux";
import { filterProjects } from '../../actions'
import { getUniqueTags } from '../../helpers'

export const UnconnectedFilter = ({ projects, currentFilter, filterProjects }) => {

  let filters = getUniqueTags(projects)

  console.log(currentFilter)

  return (
    <div data-test="filter-component" className="filter">
        <button
          className={`select ${currentFilter.length == 0 ? 'active' : 'unactive' }`}
          onClick={() => filterProjects(null)}
        >
        Visa alla
        </button>
      {filters.map((filterItem, i) => { return (
        <button
          data-test="filter-button"
          className={`select ${currentFilter.includes(filterItem) ? 'active' : 'unactive'}`}
          onClick={() => filterProjects(filterItem)}
          key={i}
        >
          {filterItem}
        </button>
      )})}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects,
    currentFilter: state.projects.currentFilter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterProjects: (filter) => dispatch(filterProjects(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedFilter);

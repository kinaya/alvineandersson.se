import React from "react";
import { connect } from "react-redux";
import { filterProjects } from '../../actions'
import { getUniqueTags } from '../../helpers'

/**
 * Component for displaying the list of filters and if they are active or not.
 * The default export is the connected component, but we also export an
 * unconnected component used for testing.
 *
 * @params {array} props.projects - An array with projects
 * @params {array} props.currentFilter - An array with the current filter
 * @params {function} filterProjects - Action trigger to filter projects
 */
export const UnconnectedFilter = ({ projects, currentFilter, filterProjects }) => {

  let filters = getUniqueTags(projects)

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

export default connect(mapStateToProps, {filterProjects})(UnconnectedFilter);

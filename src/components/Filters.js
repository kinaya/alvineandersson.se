import React, { Component} from "react";

const Filters = ({ projects, currentFilter, filterProjects }) => {

  // Loop through the projects and add all tags to filerArray
  // Remove duplicates from the array using Set()
  let filterArray = []
  projects.map((project, i) => {
    filterArray = [...project.tags, ...filterArray]
  })
  let filters = [...new Set(filterArray)]

    return(
      <div className="filter">
        {filters.map((filterItem, i) => { return (
          <span className={`select ${currentFilter.includes(filterItem) ? 'active' : 'unactive'}`} onClick={() => filterProjects(filterItem)} key={i}>{filterItem}</span>
        )})}
      </div>
    );
}

export default Filters;

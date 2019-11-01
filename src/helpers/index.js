
/**
 * Get unique tags from all projects
 * @param projects An array of projects
 * @return An array with the unique tags
 */
export const getUniqueTags = (projects) => {
  let filterArray = []
  projects.map((project, i) => {
    filterArray = [...project.tags, ...filterArray]
  })
  let filters = [...new Set(filterArray)]
  return filters
}

/**
 * Add or remove a filter item from an array of filters.
 * Add the item if it is not already in the array, remove it if it is.
 * @param currentFilter The current array of filters
 * @param filterItem The filter item to add or remove
 * @return An array with the filter item removed or added
 */
export const addOrRemoveFilter = (currentFilter, filterItem) => {
  let filterArray = []
  if(currentFilter.includes(filterItem)) {
    filterArray = currentFilter.filter(item => item !== filterItem)
  } else {
    filterArray = [...currentFilter, filterItem]
  }
  return filterArray;
}

/**
 * Get the next project from an array of projects.
 * If the current project is the last one, the next of is the first one.
 * @param projects The array of projects
 * @param project The current project
 * @return The next project in the array
 */
export const getNextProject = (projects, project) => {
  let nextProject = {}
  let index = projects.indexOf(project);
  if(index >= 0 && index < projects.length -1) {
    nextProject = projects[index +1]
  } else if(index >=0 && index == projects.length -1) {
    nextProject = projects[0]
  }
  return nextProject;
}



// Loop through the projects and add all tags to filerArray
// Remove duplicates from the array using Set()

export const getUniqueTags = (projects) => {
  let filterArray = []
  projects.map((project, i) => {
    filterArray = [...project.tags, ...filterArray]
  })
  let filters = [...new Set(filterArray)]
  return filters
}

export const addOrRemoveFilter = (currentFilter, filterItem) => {
  let filterArray = []
  if(currentFilter.includes(filterItem)) {
    filterArray = currentFilter.filter(item => item !== filterItem)
  } else {
    filterArray = [...currentFilter, filterItem]
  }
  return filterArray;
}

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

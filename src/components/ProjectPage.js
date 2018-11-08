import React, { Component} from "react";
import { Link } from "react-router-dom";

const ProjectPage = ({project, projects, navigate}) => {

//  componentDidMount() {
//     window.scrollTo(0, 0);
//   }

  // Generate previous and next links
  let nextLink = null;
  let nextTitle = null;
  let previousLink = null;
  let previousTitle = null;
  let navigationClass = '';
  for(let i = 0; i < projects.length; i++) {
    if(projects[i].id === project.id) {
      // Add previousLink if not on first project
      if(i != 0) {
        previousLink = '/projects/' + projects[i-1].id
        previousTitle = projects[i-1].title
      }
      // Add nextLink if not on last project
      if(i != projects.length -1) {
        nextLink = '/projects/' + projects[i+1].id
        nextTitle = projects[i+1].title
      }
      if(i == 0) {
        navigationClass = 'first'
      }
      if(i == projects.length -1) {
        navigationClass = 'last'
      }
    }
  }

  // Generate tags
  let tags = [];
  project.extendedTags.map((tag, i) => {
    {project.extendedTags.length -1 === i ? (
      tags.push(<span className="tag" key={i}>{tag}</span>)
    ) : (
      tags.push(<span className="tag" key={i}>{tag}, </span>)
    )}
  });

  return (
    <div className="container projectPage">
    <Link className="logo" to="/" onClick={() => navigate('left')}>
      <div className="name"><span>Alvine</span>Andersson</div>
      <div className="subheading">frilansande webbutvecklare</div>
    </Link>
    <div className="inner">

      <img src={project.img.url} />

      <h1>{project.title}</h1>

      <div className="info">
        <div><span>Datum:</span> {project.date}</div>
        <div><span>Tekniker:</span> {tags}</div>
        {project.designer ? <div><span>Form:</span> <a href={project.designer.url}>{project.designer.name}</a></div> : ''}
        {project.github ? <div><span>Github:</span> <a href={project.github}>{project.github}</a></div> : ''}
        {project.link ? <div><span>Url:</span> <a href={project.link}>{project.link}</a></div> : ''}
      </div>

      <div className="description"><p>{project.description}</p></div>

      <div className={`navigation ${navigationClass}`}>
        {previousLink ? <Link onClick={() => navigate('left')} className="previous" to={previousLink}><span>&#8592; Föregående</span>{previousTitle}</Link> : ''}
        {nextLink ? <Link onClick={() => navigate('right')} className="next" to={nextLink}><span>Nästa &#8594;</span>{nextTitle}</Link> : ''}
      </div>

    </div>
    </div>
  );

}

export default ProjectPage;

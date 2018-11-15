import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectPage extends React.Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {scrollTop: 0}
  }

  // Add scroll event listener
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  // Remove scroll event listener
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  // Calculate a distance to move paralax background image
  handleScroll(event) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    let itemTranslate = scrollTop / 3;
    this.setState({
      scrollTop: itemTranslate
    });
  }

  render() {

  const {project, projects, navigate} = this.props;
  const {scrollTop} = this.state;

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

  // Generate title
  let title = [];
  let titlearray = project.title.split("");
  titlearray.map((char, i) => {
    let length = titlearray.length;
    let interval = 800 / length;
    if(char != " ") {
      title.push(<span aria-hidden="true" style={{transition: `all calc(${i+1}*${interval}ms) ease-in-out 400ms` }} key={i}>{char}</span>)
    } else {
      title.push(<span key={i}>&#160;</span>)
    }
  });

  // Generate info
  let info = []
  let infoarray = project.info.split("");
  infoarray.map((char, i) => {
    let length = infoarray.length;
    let interval = 800 / length;
    if(char != " ") {
      info.push(<span aria-hidden="true" style={{transition: `all calc(${i+1}*${interval}ms) ease-in-out 400ms` }} key={i}>{char}</span>)
    } else {
      info.push(<span key={i}>&#160;</span>)
    }
  });

  let style = {
    backgroundPositionY: -scrollTop
  }

  return (
    <div className="projectPage" >
    <div className="container">

    <Link className="logo" to="/" onClick={() => navigate('left')}>
      <span className="first-letter">A</span>
      <span className="letters">lvine</span>
    </Link>

    <div className="inner">

      <div className="project-heading">
        <h1 className="project-title" aria-label={project.info}>
          {info}
        </h1>
      <p className="project-name">
        {title}
      </p>
      </div>

    </div>

    <div className="parallax" ><div className="parallaxinner" style={style}></div></div>

    <div className="inner">
      <p className="project-description">{project.description}</p>

      <div className="info">
        <div><span>Datum:</span> {project.date}</div>
        <div><span>Tekniker:</span> {tags}</div>
        {project.designer ? <div><span>Form:</span> <a href={project.designer.url}>{project.designer.name}</a></div> : ''}
        {project.github ? <div><span>Github:</span> <a href={project.github}>{project.github}</a></div> : ''}
        {project.link ? <div><span>Url:</span> <a href={project.link}>{project.link}</a></div> : ''}
      </div>





      <div className={`navigation ${navigationClass}`}>
        {previousLink ? <Link onClick={() => navigate('left')} className="previous" to={previousLink}><span>&#8592; Föregående</span>{previousTitle}</Link> : ''}
        {nextLink ? <Link onClick={() => navigate('right')} className="next" to={nextLink}><span>Nästa &#8594;</span>{nextTitle}</Link> : ''}
      </div>

    </div>
    </div>
    </div>
  );
}
}

export default ProjectPage;

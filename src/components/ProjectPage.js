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
  let nextImageUrl = null;
  let previousLink = null;
  let previousTitle = null;
  let previousImageUrl = null;
  let navigationClass = '';
  for(let i = 0; i < projects.length; i++) {
    if(projects[i].id === project.id) {
      // Add previousLink if not on first project
      if(i != 0) {
        previousLink = '/projects/' + projects[i-1].id
        previousTitle = projects[i-1].title
        previousImageUrl = projects[i-1].img.url
      }
      // Add nextLink if not on last project
      if(i != projects.length -1) {
        nextLink = '/projects/' + projects[i+1].id
        nextTitle = projects[i+1].title
        nextImageUrl = projects[i+1].img.url
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
/*  let title = [];
  let titlearray = project.title.split("");
  titlearray.map((char, i) => {
    let length = titlearray.length;
    let interval = 800 / length;
    if(char != " ") {
      title.push(<span aria-hidden="true" style={{transition: `all calc(${i+1}*${interval}ms) ease-in-out 400ms` }} key={i}>{char}</span>)
    } else {
      title.push(<span key={i}>&#160;</span>)
    }
  });*/

  // Generate title
  let title = ""
  let titlearray = project.title.split("");
  let titlewordarray = project.title.split(" ");
  // Calculate the correct time for the different transitions
  let titlelength = titlearray.length;
  let titleinterval = 800 / titlelength;
  let titletimes = 1;

  for(let i = 0; i < titlewordarray.length; i++) {
    title += '<span class="word">';
    let word = titlewordarray[i];
    let lettersarray = word.split("");
    for(let y = 0; y < lettersarray.length; y++) {
      let letter = lettersarray[y];
      title += '<span aria-hidden="true" style="transition: all ' + titletimes * titleinterval  + 'ms ease-in-out 400ms">' + letter + '</span>';
      titletimes += 1;
    }
    title += '</span>';
  }

  // Generate info
  let info = ""
  let infoarray = project.info.split("");
  let wordarray = project.info.split(" ");
  // Calculate the correct time for the different transitions
  let length = infoarray.length;
  let interval = 800 / length;
  let times = 1;

  for(let i = 0; i < wordarray.length; i++) {
    info += '<span class="word">';
    let word = wordarray[i];
    let lettersarray = word.split("");
    for(let y = 0; y < lettersarray.length; y++) {
      let letter = lettersarray[y];
      info += '<span aria-hidden="true" style="transition: all ' + times * interval  + 'ms ease-in-out 400ms">' + letter + '</span>';
      times += 1;
    }
    info += '</span>';
  }


  let style = {
    backgroundPositionY: -scrollTop
  }

//      <div className="parallax" ><div className="parallaxinner" style={style}></div></div>
//       <p className="project-name" aria-label={project.title} dangerouslySetInnerHTML={{__html: info}}></p>

  return (
    <div className="projectPage" >
    <div className="container">

    <Link className="logo" to="/" onClick={() => navigate('left')}>
      <span>A</span>
    </Link>

    <div className="inner">


      <div className="project-heading">
        <h1 className="project-title" aria-label={project.title} dangerouslySetInnerHTML={{ __html: title }}></h1>
      </div>

    </div>

    <div className="image"><img src={project.image.url} /></div>



    <div className="inner">
      <p className="project-description">{project.description}</p>

      <div className="info">
        <p><span>Datum:</span> {project.date}</p>
        <p><span>Tekniker:</span> {tags}</p>
        {project.designer ? <p><span>Form:</span> <a href={project.designer.url}>{project.designer.name}</a></p> : ''}
        {project.github ? <p><span>Github:</span> <a href={project.github}>{project.github}</a></p> : ''}
        {project.link ? <p><span>Url:</span> <a href={project.link}>{project.link}</a></p> : ''}
      </div>





      <div className={`navigation ${navigationClass}`}>
        {previousLink ? <Link style={{backgroundImage: `url(${previousImageUrl})`}} onClick={() => navigate('left')} className="previous" to={previousLink}><span className="text"><span className="inner"><span>Föregående</span>{previousTitle}</span></span></Link> : ''}
        {nextLink ? <Link style={{backgroundImage: `url(${nextImageUrl})`}} onClick={() => navigate('right')} className="next" to={nextLink}><span className="text"><span className="inner"><span>Nästa</span>{nextTitle}</span></span></Link> : ''}
      </div>

    </div>
    </div>
    </div>
  );
}
}

export default ProjectPage;

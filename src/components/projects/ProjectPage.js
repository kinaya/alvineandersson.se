import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

class ProjectPage extends React.Component {

  constructor(props) {
    super(props)
    //this.handleScroll = this.handleScroll.bind(this)
    //this.state = {scrollTop: 0}
  }

  //componentDidMount() {
  //  window.addEventListener('scroll', this.handleScroll);
  //}

  //componentWillUnmount() {
  //  window.removeEventListener('scroll', this.handleScroll);
  //}

  // Calculate a distance to move paralax background image
  //handleScroll(event) {
  //  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  //  let itemTranslate = scrollTop / 3;
  //  this.setState({
  //    scrollTop: itemTranslate
  //  });
  //}

  render() {

  const {project, projects} = this.props;
  //const {scrollTop} = this.state;

  // Get the next project
  let nextProject = {}
  let index = projects.indexOf(project);
  if(index >= 0 && index < projects.length -1) {
    nextProject = projects[index +1]
  } else if(index >=0 && index == projects.length -1) {
    nextProject = projects[0]
  }

  // Generate tags
  /*let tags = [];
  project.extendedTags.map((tag, i) => {
    {project.extendedTags.length -1 === i ? (
      tags.push(<span className="tag" key={i}>{tag}</span>)
    ) : (
      tags.push(<span className="tag" key={i}>{tag}, </span>)
    )}
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


  //let style = {
  //  backgroundPositionY: -scrollTop
  //}

//      <div className="parallax" ><div className="parallaxinner" style={style}></div></div>
//       <p className="project-name" aria-label={project.title} dangerouslySetInnerHTML={{__html: info}}></p>

//               <Link onClick={() => navigate('right')} to={`/projects/${nextProject.id}`} className="title">{nextProject.title}</Link>
//      <Link className="logo" to="/" onClick={() => navigate('left')}>
  return (
    <div className="projectPage" >

      <Helmet>
        <title>{project.title} | Alvine Andersson</title>
        <meta name="description" content={project.info} />
      </Helmet>


      <div className="container">

      <Link className="logo" to="/">
        <span>A</span>
      </Link>

      <div className="inner">

        <div className="project-heading">
          <h1 className="project-title" aria-label={project.title} dangerouslySetInnerHTML={{ __html: title }}></h1>
        </div>

        <p className="description">{project.info}</p>

      </div>

      <div className="featuredImage"><img alt={project.image.alt} src={require(`../../images/${project.image.url}`)} /></div>

      <div className="inner">

          {project.content &&
            project.content.map((paragraph, i) => { return (
              <div key={i}>
                <h4>{paragraph.headline}</h4>
                <p>{paragraph.paragraph}</p>
              </div>
            )})
          }

        <p className="project-description">{project.description}</p>

        <div className="stats">
          <p><span>Datum:</span> {project.date}</p>
          <p><span>Tekniker:</span>{project.extendedTags}</p>
          {project.designer && <p><span>Form:</span> <a href={project.designer.url}>{project.designer.name}</a></p>}
          {project.github && <p><span>Github:</span> <a href={project.github.url}>{project.github.name}</a></p>}
          {project.link && project.link.url && <p><span>Url:</span> <a href={project.link.url}>{project.link.name}</a></p>}
        </div>

      </div>

      <div className="navigation">
        <div className="inner">
        {nextProject &&
          <div className="project">
          <Link to={`/projects/${nextProject.id}`} className="inner-div">
            <div className="image"><img src={require(`../../images/${nextProject.listimg.url}`)} /></div>
            <div className="info">
              <div className="what"><span>{nextProject.what}</span></div>
              <div className="title">
              {nextProject.title}
              </div>
              <div className="tags">{nextProject.date}</div>
            </div>
            </Link>
          </div>
        }
        </div>
      </div>

    </div>
    </div>
  );
}
}

export default ProjectPage;

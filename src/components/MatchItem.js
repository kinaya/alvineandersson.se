import React, { Component} from "react";

class MatchItem extends Component{


  render(){

    const {item, matchMaking} = this.props;

//         {item.arrow ? <span className={`arrow ${item.arrowAlignment}`}></span> : ''}

    if (item.type === 'alternatives') {

      return (
        <div className={`outer align-${item.alignment} visible-${item.visible}`}>
        <div className={`item alternatives clickable-${item.clickable}`}>
          {item.clickable ? (
            item.alternatives.map((alternative, i) => { return (
              <div
                className={`alternative active-${alternative.active}`}
                onClick={() => matchMaking(item.id, alternative.id, alternative.link, alternative.alignment)}
                key={i}>
                <span className="inner">{alternative.text}</span>
              </div>
            )})
          ):(
            item.alternatives.map((alternative, i) => { return (
              <div
                className={`alternative active-${alternative.active}`}
                key={i}>
                <span className="inner">{alternative.text}</span>
              </div>
            )})
          )}
          </div>
        </div>
      )

    } else if(item.type === 'yesno') {

      return (
        <div className={`outer align-${item.alignment} visible-${item.visible}`}>
        <div className={`item yesno ${item.alignment} visible-${item.visible} active-${item.active}`}>
          <div className="alternative">
            <span className="inner">{item.text}</span>
            {item.clickable ? (
              item.alternatives.map((alternative, i) => { return (
                <div
                  className={`yesnoalt ${alternative.id} clickable-${item.clickable} active-${alternative.active}`}
                  onClick={() => matchMaking(item.id, alternative.id, alternative.link, alternative.alignment)}
                  key={i}>
                  <span className="text">{alternative.text}</span>
                </div>
              )})
            ):(
              item.alternatives.map((alternative, i) => { return (
                <div
                  className={`yesnoalt ${alternative.id} clickable-${item.clickable} active-${alternative.active}`}
                  key={i}>
                  <span className="text">{alternative.text}</span>
                </div>
              )})
            )}
            <span className="half-diamond half-diamond-left"></span>
            <span className="halt-diamond half-diamond-right"></span>
          </div>
        </div>

        </div>
      )

/*
<div className="item yesnoalternatives">
  {item.clickable ? (
    item.alternatives.map((alternative, i) => { return (
      <div
        className={`alternative ${alternative.id} active-${alternative.active}`}
        onClick={() => matchMaking(item.id, alternative.id, alternative.link, alternative.alignment)}
        key={i}>
        <span className="inner">{alternative.text}</span>
      </div>
    )})
  ):(
    item.alternatives.map((alternative, i) => { return (
      <div
        className={`alternative ${alternative.id} active-${alternative.active}`}
        key={i}>
        <span className="inner">{alternative.text}</span>
      </div>
    )})
  )}
</div>*/


/*      return (
        <div className={`outer visible-${item.visible}`}>
        {item.arrow ? <span className={`arrow ${item.arrowAlignment}`}></span> : ''}
        <div className={`item yesno ${item.alignment} clickable-${item.clickable} visible-${item.visible} active-${item.active}`}>
          <span className="matchText">{item.text}</span>
          <span className="matchAlternatives">
            {item.clickable ? (
              item.alternatives.map((alternative, i) => { return (
                <span
                  className={`alternative ${alternative.id} active-${alternative.active}`}
                  onClick={() => matchMaking(item.id, alternative.id, alternative.link, alternative.alignment)}
                  key={i}>
                  {alternative.text}
                </span>
              )})
            ):(
              item.alternatives.map((alternative, i) => { return (
                <span
                  className={`alternative ${alternative.id} active-${alternative.active}`}
                  key={i}>
                  {alternative.text}
                </span>
              )})
            )}
          </span>
          </div>
        </div>
      )*/

    } else {

      return (
        <div className={`match visible-${item.visible}`}>
        <div className={`answer ${item.id}`}>
          <div className="inner">
          <span className="headline">{item.headline}</span>
          <span className="text">{item.text}</span>
          </div>
        </div>
        <span onClick={() => matchMaking(null,null,null,null)} className="redo">Gör ny matchmaking</span>
        </div>
      )

    }

  }
}

export default MatchItem;

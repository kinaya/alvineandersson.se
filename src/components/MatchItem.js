import React, { Component} from "react";

class MatchItem extends Component{


  render(){

    const {item, matchMaking} = this.props;

    if (item.type === 'alternatives') {

      return (
        <div className={`outer visible-${item.visible}`}>
        {item.arrow ? <span className={`arrow ${item.arrowAlignment}`}></span> : ''}
        <div className={`item alternatives clickable-${item.clickable}`}>
          {item.clickable ? (
            item.alternatives.map((alternative, i) => { return (
              <span
                className={`alternative active-${alternative.active}`}
                onClick={() => matchMaking(item.id, alternative.id, alternative.link, alternative.alignment)}
                key={i}>
                <span className="inner">{alternative.text}</span>                
              </span>
            )})
          ):(
            item.alternatives.map((alternative, i) => { return (
              <span
                className={`alternative active-${alternative.active}`}
                key={i}>
                <span className="inner">{alternative.text}</span>
              </span>
            )})
          )}
          </div>
        </div>
      )

    } else if(item.type === 'yesno') {

      return (
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
      )

    } else {

      return (
        <div className={`outer visible-${item.visible}`}>
        <div className={`item answer ${item.id}`}>
          {item.arrow ? <span className={`arrow ${item.arrowAlignment}`}></span> : ''}
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

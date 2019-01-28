import React, { Component} from "react";

class MatchItem extends Component{


  render(){

    const {item, matchMaking} = this.props;

    if (item.type === 'alternatives') {

      return (
        <div className={`item visible-${item.visible}`}>
        <div className={`alternative alternative-alternatives clickable-${item.clickable}`}>
          {item.clickable ? (
            item.alternatives.map((alternative, i) => { return (
              <div
                className={`text`}
                onClick={() => matchMaking(item.id, alternative.id, alternative.link, alternative.alignment)}
                key={i}>
                <span className="inner">{alternative.text}</span>
              </div>
            )})
          ):(
            item.alternatives.map((alternative, i) => { return (
              <div
                className={`text visible-${alternative.active}`}
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
        <div className={`item visible-${item.visible}`}>
        <div className={`alternative alternative-yesno clickable-${item.clickable}`}>
          <span className="text">{item.text}</span>
          <div className="buttons">
            {item.alternatives.map((alternative, i) => { return (
              <button
                className={`yesnoalt ${alternative.id} clickable-${item.clickable} display-${alternative.active}`}
                onClick={() => matchMaking(item.id, alternative.id, alternative.link, alternative.alignment)}
                key={i}>
                {alternative.text}
              </button>
            )})}
          </div>
        </div>
        </div>
      )

    } else {

      return (
        <div className={`item visible-${item.visible}`}>
        <div className={`result ${item.id}`}>
          <div className="headline">{item.headline}</div>
          <div className="text">{item.text}</div>
        </div>
        <span onClick={() => matchMaking(null,null,null,null)} className="redo">Gör ny matchmaking</span>
        </div>
      )

    }

  }
}

export default MatchItem;

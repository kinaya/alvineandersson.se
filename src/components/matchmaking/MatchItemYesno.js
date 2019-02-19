import React from "react";

const MatchItemYesno = ({item, matchMaking}) => {
  return (
    <div className={`alternative yesno clickable-${item.clickable}`}>

      <span className="text">{item.text}</span>

      <div className="buttons">
        {item.alternatives.map((alt, i) => { return (
          <button
            className={`visible-${alt.visible}`}
            onClick={item.clickable ? () => matchMaking(item.id, alt.id, alt.link) : null}
            key={i}>
            {alt.text}
          </button>
        )})}
      </div>

    </div>
  )
}

export default MatchItemYesno;

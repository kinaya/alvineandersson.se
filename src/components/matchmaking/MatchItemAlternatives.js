import React from "react";

const MatchItemAlternatives = ({item, matchMaking}) => {
  return (
    <div className={`alternative alternatives clickable-${item.clickable}`}>
      {item.alternatives.map((alt, i) => { return (
        <div
          className={`text visible-${alt.visible}`}
          onClick={item.clickable ? () => matchMaking(item.id, alt.id, alt.link) : null}
          key={i}>
          <span>{alt.text}</span>
        </div>
      )})}
    </div>
  )
}

export default MatchItemAlternatives;

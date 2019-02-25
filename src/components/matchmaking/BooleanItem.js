import React from "react";
import PropTypes from 'prop-types'

const BooleanItem = ({item, matchMaking}) => {
  return (
    <div data-test="boolean-item-component" className={`alternative boolean-item clickable-${item.clickable}`}>

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

BooleanItem.propTypes = {
  item: PropTypes.object.isRequired,
  matchMaking: PropTypes.func.isRequired
}

export default BooleanItem;

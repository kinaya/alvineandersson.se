import React from "react";
import PropTypes from 'prop-types'

const SelectItem = ({item, matchMaking}) => {
  return (
    <div data-test="select-item-component" className={`alternative select-item clickable-${item.clickable}`}>
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

SelectItem.propTypes = {
  item: PropTypes.object.isRequired,
  matchMaking: PropTypes.func.isRequired
}

export default SelectItem;

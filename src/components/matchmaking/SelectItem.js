import React from "react";
import PropTypes from 'prop-types'

const SelectItem = ({item, chooseItem}) => {

  console.log('The select item:', item)

  return (
    <div data-test="select-item-component" className={`alternative select-item clickable-${item.clickable}`}>
      {item.alternatives.map((alt, i) => { return (
        <div
          className={`text visible-${alt.visible}`}
          onClick={item.clickable ? () => chooseItem(i, alt.match) : null}
          key={i}>
          <span>{alt.text}</span>
        </div>
      )})}
    </div>
  )
}

SelectItem.propTypes = {
  item: PropTypes.object.isRequired,
  chooseItem: PropTypes.func.isRequired
}

export default SelectItem;

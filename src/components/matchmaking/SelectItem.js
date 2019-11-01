import React from "react";
import PropTypes from 'prop-types'

/**
 * Component for displaying a project
 * @param {int} props.itemNumber - The projects position in array
 * @param {object} props.item - The item
 * @param {function} props.chooseItem - Callback function to choose an item
 */
const SelectItem = ({itemNumber, item, chooseItem}) => {

  return (
    <div data-test="select-item-component" className={`select-item visible-${item.visible} clickable-${item.clickable}`}>
      {item.alternatives.map((alt, i) => { return (
        <div
          className={`text visible-${alt.visible}`}
          onClick={item.clickable ? () => chooseItem(itemNumber, i, alt.match) : null}
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

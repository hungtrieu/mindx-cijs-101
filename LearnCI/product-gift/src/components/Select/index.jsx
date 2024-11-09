import React from 'react'

const Select = (props) => {
  return (
    <select>
      <option value="-1">{props.text}</option>
      {props.options ? props.options.map( option => (
        <option value={option.value} >{option.label}</option>
      )) : ''}
    </select>
  )
}

export default Select

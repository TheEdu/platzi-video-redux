import React from 'react';
import './icons.css'

function Icon(props) {
  const {
    color,
    size,
  } = props
  return (
    <svg
      fill={color}
      height={size}
      width={size}
      viewBox="0 0 32 32"
      className={"icon-px-5"}
    >
      {props.children}
    </svg>
  )
}

export default Icon
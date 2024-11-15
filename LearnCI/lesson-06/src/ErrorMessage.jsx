import React from 'react'

const ErrorMessage = (props) => {
  return (
    <div className="error" style={{ color: 'red'}}>
      {props.error}
    </div>
  )
}

export default ErrorMessage

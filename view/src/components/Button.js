import React from 'react'

function Button({label}) {
  return (
    <div data-testid="button" style={{border: "1px solid blue"}}>
        {label}
    </div>
  )
}

export default Button
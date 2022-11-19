import React from 'react'


type inputField = {
    handleChange: any,
    value: any 
}
const InputField = ({handleChange, value}: inputField) => {
  return (
    <div>
      <input type="text" onChange={() => handleChange()} value={value} />
    </div>
  )
}

export default InputField

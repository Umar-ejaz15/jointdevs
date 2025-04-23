import React from 'react'

const ButtonComponent = ({txt}) => {
  return (
    <div>
      <button className="bg-white px-10  text-black font-bold flex items-end py-2 rounded hover:bg-gray-100 cursor-pointer">
      {txt}
      </button>
    </div>
  )
}

export default ButtonComponent
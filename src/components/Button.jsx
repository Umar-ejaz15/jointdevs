import React from 'react'

const Button = ({txt}) => {
  return (
    <button className="bg-blue-600 hover:bg-white hover:text-black hover:border hover:border-black dark:bg-purple-600 dark:hover:bg-white dark:hover:text-black dark:hover:border dark:hover:border-white rounded-md cursor-pointer text-white px-4 py-2">
      {txt}
    </button>
  )
}

export default Button
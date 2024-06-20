import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Counter = () => {
    const [value, setValue] = useState(0)

    const handleIncrement = () => {
        setValue(value + 1)
    }

    const handleDecrement = () => {
        if (value === 0) return
        setValue(value - 1)
    }

    useEffect(() => {
        const fetchCounter = async () => {
            const { data } = await axios.get('/counter')
            setValue(data.value)
        }

        fetchCounter()
    }, [])
  return (
    <div>
      <h2 className="text-3xl font-bold ">Counter {value}</h2>
      <button onClick={handleIncrement} className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>+</button>
      <button onClick={handleDecrement} className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>-</button>
    </div>
  )
}

export default Counter
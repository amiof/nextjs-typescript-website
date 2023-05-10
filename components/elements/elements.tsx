import React, { useState } from 'react'
import { Collapse, Grid, Text } from "@nextui-org/react";

type Props = {}

function Element({ }: Props) {
  const [openCollaps, setOpenCollaps] = useState<boolean>(true)

  const clickHandler = () => {
    setOpenCollaps(!openCollaps)
  }
  return (
    <div className=' w-2/3 bg-gray-900 bg-opacity-20 text-white mx-auto mt-5  rounded-xl backdrop-blur-lg border border-gray-700 divide-y divide-dash divide-gray-800   '>
      <div className='flex justify-between p-5 ' onClick={clickHandler}>
        <p className='ml-20' >shipped</p>
        <span className="material-symbols-outlined">
          expand_less
        </span>
      </div>
      <div className={!openCollaps ? "hidden" : "w-2/3 h-[400px]"} ></div>
    </div>

  )
}

export default Element

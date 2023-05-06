import React from 'react'
// import * as icon from "@/components/icons"
type Data = {
  id: number,
  title: string,
  pic: JSX.Element,
  details: string
}
type Props = {
  DataSet: Data
}

function Card({ DataSet }: Props) {
  const { id, pic, details, title } = DataSet
  return (
    <div className='w-[300px] h-full bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-2xl ml-5 hover:border hover:border-gray-700 transition:border-color delay-200 ' >
      <div className='flex ml-5 pt-8 pl-2 items-center '>
        <div className='rounded-full w-12 h-12 bg-neutral-900 flex justify-center items-center text-purple-700' >
          {pic}
        </div>
        <h1 className='text-white ml-2 font-medium text-xl'>{title}</h1>
      </div>
      <div className='text-gray-400'>
        <p className='m-7 text-start'>{details}</p>


      </div>

    </div>
  )
}

export default Card 

import React from 'react'

type Props = {}

function Card({ }: Props) {

  return (
    <div className='w-2/12 h-1/4 bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-2xl m-10 ' >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className='flex ml-5 pt-8 pl-2 items-center '>
        <div  className='rounded-full w-10 h-10 bg-neutral-900 flex justify-center items-center' >
          <span className="material-symbols-outlined text-purple-600">
            auto_awesome
          </span>
        </div>
        <h1 className='text-white ml-2 font-medium text-xl'> Title</h1>
      </div>
      <div className='text-gray-400'>
        <p className='m-7 text-start'>Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.</p>


      </div>

    </div>
  )
}

export default Card 

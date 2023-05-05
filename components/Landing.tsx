import Image from 'next/image'
import React from 'react'
import NavbarLanding from './Navbar'
import Card from './Card'
type Props = {}

function Landing({ }: Props) {
  return (
    <div className="bg-[url('../public/pics/landing-bg.jpg')] h-[1200px]   bg-no-repeat bg-cover bg-center relative">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <NavbarLanding></NavbarLanding>
      <div className='absolute top-1/3 left-32 w-full h-60 flex flex-col  '>
        <div>
          <h1 className='text-white font-bold text-[3rem] w-full m-auto'> Make beautiful <p className='text-red-600 inline'>websites</p> regardless of<br /> your <p className='text-blue-700 inline'>design</p> experience.</h1>
        </div>
        <div >
          <h2 className='text-gray-400 font-bold text-xl  '>Beautiful, fast and modern React UI library.</h2>
        </div>
      </div>
      <Card></Card>

    </div>

  )
}

export default Landing

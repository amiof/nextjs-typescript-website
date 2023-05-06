import Link from 'next/link'
import React from 'react'
type Props = {}

function NavbarLanding({ }: Props) {
  return (

    <div className='w-full m-auto border-gray-700  border-b h-fit  bg-black bg-opacity-30 backdrop-blur-lg sticky top-0 z-50  '>
      <div className=' text-white w-2/3 border-white backdrop-filter  m-auto flex justify-between '>
        <div className='flex'>
          <p className='m-5'>icon</p>
          <p className='m-5'>brand</p>
        </div>
        <div className='flex opacity-100 flex-row-reverse' >
          <Link href="#" className='m-5 opacity-90  '>Products </Link>
          <Link href="#" className='m-5'>Coustomers</Link>
          <Link href="#" className='m-5'> Documents </Link>
          <Link href="#" className='m-5'>About us</Link>
        </div>
        <div className='flex'>
          <p className='m-5'>signup</p>
          <div className='m-5'>login</div>

        </div>

      </div>
    </div>
  )
}

export default NavbarLanding

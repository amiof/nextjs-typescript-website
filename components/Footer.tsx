import React from 'react'
import data from "components/data/communityData"
import Card from './card/Card'
type Props = {}

function Footer({ }: Props) {
  return (
    <div className='bg-[url("../public/pics/3.png")] bg-cover h-screen'>
      <div className='bg-[url("../public/pics/footer2.png")] bg-cover  w-full flex items-center flex-col h-[900px]' >
        <div>
          <h1 className='text-white text-[3rem] text-center mt-44'>community</h1>
          <p className='text-gray-500 text-xl'> Get involved in our community. Everyone is welcome!</p>
        </div>
        <div className='w-full flex justify-center mt-20'>
          {data.map(item => <Card DataSet={item} key={item.id}></Card>)}
        </div>
        <div className='bg-gray-900 text-white backdrop-blur-lg bg-opacity-10 h-60 w-full mt-36 border-t  border-gray-800 flex flex-row justify-center'>
          <ul className='ml-16 mr-16 mt-10'>
            <li>Blogs</li>
            <li className='text-gray-500 mt-6 hover:text-white cursor-pointer'> al Generated </li>
          </ul>
          <ul className='mx-16 mt-10' >
            <li>chat Code</li>
            <li className='text-gray-500 mt-6 hover:text-white cursor-pointer'> Turn Question to Code</li>
          </ul>
          <ul className='mx-16 mt-10'>
            <li>Acount</li>
            <li className='text-gray-500 mt-6 hover:text-white cursor-pointer'>sign in </li>
            <li className='text-gray-500 mt-6 hover:text-white cursor-pointer'>Create Account</li>
          </ul>
          <ul className='mx-16 mt-10'>
            <li>Support</li>
            <li className='text-gray-500 mt-6 hover:text-white cursor-pointer'>privacy Policy</li>
            <li className='text-gray-500 mt-6 hover:text-white cursor-pointer'>Terms & Conditions</li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Footer

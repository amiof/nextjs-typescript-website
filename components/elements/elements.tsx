import React, { useState } from 'react'
import { Collapse, Grid, Text } from "@nextui-org/react";
import { CodeBlock, dracula, atomOneDark } from 'react-code-blocks';
import { test } from "./insideElements/MusicPlayerCode"
type Props = {}

function Element({ }: Props) {
  const [openCollaps, setOpenCollaps] = useState<boolean>(true)

  const clickHandler = () => {
    setOpenCollaps(!openCollaps)
  }
  //google font icon for icon used https://fonts.google.com/icons?icon.platform=web&icon.set=Material+Symbols

  return (
    <div className=' w-2/3 bg-gray-900 bg-opacity-20 text-white mx-auto mt-5  rounded-xl backdrop-blur-lg border border-gray-700 divide-y divide-dash divide-gray-800   '>
      <div className='flex justify-between p-5 ' onClick={clickHandler}>
        <p className='ml-20' >shipped</p>
        {openCollaps ?
          <span className="material-symbols-outlined">
            expand_less
          </span>
          :
          <span className="material-symbols-outlined" >
            expand_more
          </span>
        }
      </div>
      <div className={!openCollaps ? "hidden" : "w-full h-[400px] flex "} >
        <div className='w-3/5 border border-yellow-300 '>
          <p>hi</p>

        </div>
        <div className='w-2/5 h-full overflow-auto'>
          <CodeBlock
            text={test}
            language="jsx"
            showLineNumbers={true}
            wrapLines={true}
            theme={{ ...atomOneDark, backgroundColor: 'none' }}
          />
        </div>

      </div>
    </div>

  )
}

export default Element

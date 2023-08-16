import React, {  useState } from 'react'
import { CodeBlock, monokai } from 'react-code-blocks';
type Props = {
  code: string
  title: string
}

function Element({ code, title }: Props) {
  const [openCollaps, setOpenCollaps] = useState<boolean>(true)

  const clickHandler = () => {
    setOpenCollaps(!openCollaps)
  }
  //google font icon for icon used https://fonts.google.com/icons?icon.platform=web&icon.set=Material+Symbols

  return (
    <div className=' w-2/3 bg-gray-900 bg-opacity-20 text-white mx-auto mt-5  rounded-xl backdrop-blur-lg border border-gray-700 divide-y divide-dash divide-gray-800   '>
      <div className='flex justify-between p-5 ' onClick={clickHandler}>
        <p className='ml-20' >{title}</p>
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
        <div className='w-3/5 '>
          <p>hi</p>

        </div>
        <div className='w-2/5 h-full overflow-auto scro' >
          <CodeBlock
            text={code}
            language="jsx"
            showLineNumbers={true}
            wrapLines={true}
            theme={{ ...monokai, backgroundColor: 'none'}}
          />
        </div>

      </div>
    </div>

  )
}

export default Element

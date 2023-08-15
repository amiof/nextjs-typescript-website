import Landing from '@/components/Landing'
import NavbarLanding from '@/components/Navbar'
import Head from 'next/head'
import Mains from "components/main/main"
import Footer from '@/components/Footer'
import Element from '@/components/elements/elements'
import { test } from '@/components/elements/insideElements/MusicPlayerCode'
import { codeSampleButton } from '@/components/elements/insideElements/coustom-buttonCode'
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarLanding></NavbarLanding>
      <Landing></Landing >
      <Mains></Mains>
      <div className='w-full bg-[url("../public/pics/3.png")] bg-cover p-5 bg-blur-2xl'>
        <div className='flex-col '>
          <Element code={codeSampleButton} title='code sample button'></Element>
          <Element code={test} title='musice player'></Element>
          <Element code={test} title='music player'></Element>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

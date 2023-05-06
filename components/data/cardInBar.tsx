import * as icon from "../icons"
type CardData = {
  id: number,
  title: string,
  pic: JSX.Element,
  details: string

}
const data: CardData[] = [
  {
    id: 1,
    title: "Getting started",
    pic:icon.start ,
    details: "NextUI allows you make beautiful, modern, and fast websites/applications regardless of your design experience."

  },
  {
    id: 2,
    title: "NextUI + Next.js",
    pic:icon.next,
    details: "NextUI is totally compatible with Next.js you just need to customize the _app.jsx entry file to load the provider."

  }
]

export default data

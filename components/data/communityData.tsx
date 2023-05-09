import * as icon from "../icons"
type CardData = {
  id: number,
  title: string,
  pic: JSX.Element,
  details: string

}
import discord from "public/pics/discord.svg"
import twitter from "public/pics/twitter.svg"
import github from "public/pics/github.svg"
const data: CardData[] = [
  {
    id: 1,
    title: "twitter",
    pic:icon.moon ,
    details: "For announcements, tips and general information."

  },
  {
    id: 2,
    title: "Discord",
    pic:icon.moon,
    details: "To get involved in the community, ask questions and share tips."
  },
  {
    id: 3,
    title: "github",
    pic:icon.moon,
    details: "For issues, feature requests and contribute."

  }

]

export default data

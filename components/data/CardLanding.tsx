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
    title: "Themeable",
    pic:icon.auwesome ,
    details: "Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need."

  },
  {
    id: 2,
    title: "Fast",
    pic:icon.fast,
    details: "Avoids unnecessary styles props at runtime, making it more performant than other UI libraries."

  },
  {
    id: 3,
    title: "Light & Dark UI",
    pic: icon.moon,
    details: "Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes."

  },
  {
    id: 4,
    title: "Unique DX",
    pic: icon.desktop,
    details: "NextUI is fully-typed to minimize the learning curve, and provide the best possible developer experience."

  },

]
export {
  data
}

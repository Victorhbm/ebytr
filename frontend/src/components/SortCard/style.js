import tw from 'tailwind-styled-components';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export const Container = tw.div`
  grid
  gap-2
  px-5
  mb-5
  grid-flow-row
  grid-cols-3
`

export const Button = tw.button`
  py-1
  px-2
  bg-blue-three
  text-blue-one
  bg-opacity-40
  rounded-md
`

export const Span = tw.span`
  ml-2
`

export const TriangleDown = tw(AiFillCaretDown)`
  inline-block
  text-[20px]

  animate-rotate
`

export const TriangleUp = tw(AiFillCaretUp)`
  inline-block
  text-[20px]

  animate-rotate
`
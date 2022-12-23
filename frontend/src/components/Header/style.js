import tw from 'tailwind-styled-components';

export const StyledHeader = tw.header`
  flex
  justify-between
  p-5
  bg-blue-four
  text-blue-one
  items-center
`

export const Title = tw.h1`
  text-xl
  font-bold
  min-h-8
`

export const ButtonContainer = tw.div`
  flex
  justify-between
  items-center
  gap-3
`

export const Paragraph = tw.p`
  text-lg
  min-h-8
`

export const Button = tw.p`
  cursor-pointer
  border-[1.5px]
  p-1
  rounded-md
  bg-blue-two
  text-blue-four

  hover:bg-blue-four
  hover:text-blue-one
  hover:scale-105

  duration-500
  ease-in-out
`
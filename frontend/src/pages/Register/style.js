import { Link } from "react-router-dom"
import tw from "tailwind-styled-components"

export const PageContainer = tw.div`
  bg-blue-four
  min-h-screen
  text-lg
  text-blue-one
  flex
  justify-center
  items-center
`

export const Section = tw.section`
  container
  mx-auto
  max-w-xl
  lg:max-w-[1200px]
  p-5

  lg:grid
  grid-flow-col
  grid-cols-2
`

export const ImgContainer = tw.div`
  hidden
  lg:block
  w-[500px]
`

export const FormContainer = tw.div`
  lg:mt-20
`

export const Title = tw.h1`
  text-center
  text-4xl
  font-bold
  mb-10
`

export const Label = tw.label`
  block
  font-medium
  mb-3
`

export const Input = tw.input`
  py-[3px]
  px-2
  block
  w-full
  border
  rounded-md
  mt-1
  input-sm
  bg-blue-one
  focus:outline
  outline-blue-one/60
  outline-offset-2
  text-blue-four

  border-blue-one
`

export const Button = tw.button`
  p-[3px]
  w-5/12
  text-lg
  block
  mx-auto
  text-center
  rounded-md
  my-7

  hover:scale-105
  duration-200
  ease-in-out

  bg-blue-two
  text-blue-four
  font-semibold
`

export const StyledLink = tw(Link)`
  underline
`
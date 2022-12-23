import tw from "tailwind-styled-components";

export const Form = tw.form`
  my-5
  px-5
`

export const InputContainer = tw.div`
  w-full
  mx-auto
  flex
`

export const Input = tw.input`
  w-full
  py-1
  px-2
  rounded-l-md
  border-[3px]
  outline-none

  border-blue-one
  bg-blue-one
  text-blue-four
  
  focus:border-blue-two
  placeholder:text-blue-four
  placeholder:text-opacity-60
  placeholder:italic
`

export const Button = tw.button`
  py-1
  px-2
  w-[60px]
  bg-blue-two
  text-blue-four
  rounded-r-md

  hover:bg-opacity-70
  duration-300
  ease-in-out
`
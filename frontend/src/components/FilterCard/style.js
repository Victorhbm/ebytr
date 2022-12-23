import tw from 'tailwind-styled-components';

export const Container = tw.div`
  grid
  gap-2
  px-5
  mb-5
  grid-flow-row
  grid-cols-2
  sm:grid-cols-4
`

export const Button = tw.button`
  px-3
  py-2
  text-blue-one
  rounded-md
  hover:bg-blue-two
  hover:text-blue-one
  duration-300
  ease-in-out

  ${(p) => (p.$filter === p.$button
    ? "bg-blue-two text-blue-one"
    : "bg-blue-three bg-opacity-40")}
`
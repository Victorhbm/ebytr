import tw from 'tailwind-styled-components';

export const Container = tw.div`
  text-blue-one
  bg-blue-three/20
  p-2
  rounded-md
  animate-card
`;

export const UpdateInput = tw.input`
  rounded-md
  text-blue-four
  px-2
`;

export const StatusButton = tw.button`
  px-3
  rounded-md

  ${(p) => {
    switch (p.$status) {
      case 'In Progress':
        return 'bg-orange/70';
      case 'Done':
        return 'bg-green/70';
      default:
        return 'bg-blue-five';
    }
  }}
`;

export const FirstLineContainer = tw.div`
  flex
  justify-between
  mb-3
`;

export const SecondLineContainer = tw.div`
  flex
  justify-between
`;

export const ButtonsContainer = tw.div`
  flex
  gap-1
`;
import { styled } from '@stitches/react'
import { ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$4',
  borderRadis: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

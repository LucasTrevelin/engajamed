import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { CSSProperties } from 'react'

export const ImageBox = styled(motion.img)<{
  $top?: CSSProperties['top']
  $right?: CSSProperties['right']
  $bottom?: CSSProperties['bottom']
  $left?: CSSProperties['left']
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  right: ${({ $right }) => $right};
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  border-radius: 50%;
  z-index: 4;
`

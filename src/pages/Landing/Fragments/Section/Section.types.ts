import { CSSProperties, PropsWithChildren } from 'react'

export type TSection = PropsWithChildren<{
  margin?: CSSProperties['margin']
  padding?: CSSProperties['padding']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
}>

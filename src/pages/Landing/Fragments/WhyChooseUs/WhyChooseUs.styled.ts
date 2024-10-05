import { Box, css } from '@chakra-ui/react'
import emotionStyled from '@emotion/styled'

export const BackgroundContainer = emotionStyled(Box)((props) =>
  css({
    background: 'black',
    padding: '1rem 0',
    w: '100%'
  })(props.theme)
)

export const Container = emotionStyled(Box)((props) =>
  css({
    background: 'brand.background_blue',
    padding: '2rem',
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: '3rem',
    height: '100%'
  })(props.theme)
)

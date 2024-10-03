import { Box, css, Image } from '@chakra-ui/react'
import emotionStyled from '@emotion/styled'

export const Container = emotionStyled(Box)((props) =>
  css({
    w: '100%',
    bg: 'inherit',
    py: 4,
    boxShadow: 'dark-lg',
    minH: '10',
    position: 'fixed',
    borderBottom: '1px solid black',
    zIndex: 99
  })(props.theme)
)

export const Logo = emotionStyled(Image)((props) =>
  css({
    aspectRatio: '2.95/1',
    h: '97'
  })(props.theme)
)

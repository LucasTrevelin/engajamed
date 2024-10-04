import { Box, css, Heading } from '@chakra-ui/react'
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
    background: 'brand.background_green',
    padding: '2rem',
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: '1rem'
  })(props.theme)
)

export const Title = emotionStyled(Heading)((props) =>
  css({
    textAlign: 'center',
    color: 'white'
  })(props.theme)
)

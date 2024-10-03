import { css, Flex } from '@chakra-ui/react'
import emotionStyled from '@emotion/styled'

export const LandingContainer = emotionStyled(Flex)((props) =>
  css({
    w: '100vw',
    h: '100vh',
    bg: 'brand.background',
    m: 0
  })(props.theme)
)

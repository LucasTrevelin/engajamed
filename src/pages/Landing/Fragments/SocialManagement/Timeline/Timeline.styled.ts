import { css, Flex } from '@chakra-ui/react'
import emotionStyled from '@emotion/styled'

export const Container = emotionStyled(Flex)((props) =>
  css({
    w: '100%',
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    my: 8
  })(props.theme)
)

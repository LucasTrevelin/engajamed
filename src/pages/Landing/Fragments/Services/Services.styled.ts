import { css, Flex } from '@chakra-ui/react'
import emotionStyled from '@emotion/styled'

export const Container = emotionStyled(Flex)((props) =>
  css({
    rowGap: '2rem',
    flexDirection: 'column',
    width: '50%',
    py: '3rem',
    px: '2rem',
    justifyContent: 'center',
    alignItems: 'center'
  })(props.theme)
)

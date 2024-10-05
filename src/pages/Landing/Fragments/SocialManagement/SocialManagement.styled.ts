import { Box, css } from '@chakra-ui/react'
import emotionStyled from '@emotion/styled'

export const Container = emotionStyled(Box)((props) =>
  css({
    background: 'white',
    py: '10.12rem',
    display: 'flex',
    flexDir: 'column',
    height: '100%',
    minH: '1000px',
    position: 'relative',
    rowGap: '1rem'
  })(props.theme)
)

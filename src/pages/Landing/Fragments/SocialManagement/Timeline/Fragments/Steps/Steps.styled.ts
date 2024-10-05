// Steps.styled.ts
import emotionStyled from '@emotion/styled'
import { Box, css, Flex } from '@chakra-ui/react'

export const Container = emotionStyled(Flex)((props) =>
  css({
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  })(props.theme)
)

export const BoxContainer = emotionStyled(Box)((props) =>
  css({
    backgroundColor: 'brand.background_green',
    borderRadius: '8px',
    padding: '16px',
    margin: '8px 0',
    width: '300px', // adjust as needed
    textAlign: 'left'
  })(props.theme)
)

export const NumberContainer = emotionStyled(Box)((props) =>
  css({
    border: '2px solid',
    borderColor: 'brand.background_green_lighter',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 8px' // space between number and text box
  })(props.theme)
)

export const Divider = emotionStyled(Box)((props) =>
  css({
    width: '1px',
    height: '50px', // adjust as needed
    backgroundColor: 'colors.brand.divider', // you can define this color in your theme
    margin: '0 8px' // space between elements
  })(props.theme)
)

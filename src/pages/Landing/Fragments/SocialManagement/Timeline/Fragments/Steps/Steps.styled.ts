import emotionStyled from '@emotion/styled'
import { Box, css, Flex } from '@chakra-ui/react'

export const Container = emotionStyled(Flex)((props) =>
  css({
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    my: 12,
    position: 'relative'
  })(props.theme)
)

export const BoxContainer = emotionStyled(Box)<{ placement: 'left' | 'right' }>(
  (props) =>
    css({
      backgroundColor: 'brand.background_green',
      color: 'white',
      borderRadius: '0.5rem',
      padding: '1rem',
      width: '300px',
      position: 'absolute',
      top: '20%',
      transform: 'translateY(-50%)',
      [props.placement]: 'calc(50% + 2.5rem)', // Text box to the left or right
      textAlign: 'left'
    })(props.theme)
)

export const NumberContainer = emotionStyled(Box)((props) =>
  css({
    border: '2px solid',
    borderColor: 'brand.background_green_lighter',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 8px',
    zIndex: 2
  })(props.theme)
)

export const Divider = emotionStyled(Box)((props) =>
  css({
    width: '2px',
    height: '5rem', // Vertical space between numbers
    backgroundColor: 'black', // Divider color
    margin: '0.5rem 0' // Adds space vertically
  })(props.theme)
)

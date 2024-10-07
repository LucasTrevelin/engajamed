import { Button, css, Flex, Heading } from '@chakra-ui/react'
import emotionStyled from '@emotion/styled'
import styled from '@emotion/styled'

export const Container = emotionStyled(Flex)((props) =>
  css({
    justifyContent: 'center',
    alignItems: 'center',
    w: '100%',
    position: 'relative',
    pt: '4rem',
    zIndex: 2
  })(props.theme)
)

export const ContentContainer = emotionStyled(Flex)((props) =>
  css({
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 4,
    flexDirection: 'column',
    zIndex: 10
  })(props.theme)
)

export const Title = emotionStyled(Heading)((props) =>
  css({
    textAlign: 'center',
    color: 'brand.letter_highlight'
  })(props.theme)
)

export const PresentationButton = styled(Button)`
  border: 1px solid;
  border-color: 'brand.letter_highlight';
  column-gap: 0.75rem;

  &:hover {
    color: black;
  }
`

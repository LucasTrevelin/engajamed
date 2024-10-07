import { css, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const TopicContainer = styled(Flex)((props) =>
  css({
    justifyContent: 'flex-start',
    alignItems: 'center',
    w: '100%',
    position: 'relative',
    p: '4rem 2rem',
    zIndex: 2,
    background: 'brand.background_blue',
    pos: 'relative'
  })(props.theme)
)

export const Allegory = styled.div`
  border-radius: 0 0 7rem 7rem;
  height: 7rem;
  position: absolute;
  top: 0;
  right: 5rem;
  width: 14rem;
  background-color: #ffffff;
`

export const BodyContainer = styled(Flex)((props) =>
  css({
    justifyContent: 'center',
    alignItems: 'flex-start',
    w: '100%',
    p: '2rem',
    zIndex: 2,
    background: 'brand.background'
  })(props.theme)
)

export const PlanContainer = styled(Flex)((props) =>
  css({
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    w: '100%',
    p: '2rem',
    rowGap: 8
  })(props.theme)
)

export const PlanBox = styled(Flex)((props) =>
  css({
    flexDir: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    p: '2rem 3rem',
    background: '#ffffff',
    borderRadius: 12,
    border: '1px solid #000000',
    textAlign: 'left',
    rowGap: '3rem'
  })(props.theme)
)

export const HighlightBox = styled(Flex)((props) =>
  css({
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    p: '0.5rem',
    background: 'brand.background_blue',
    color: '#ffffff',
    borderRadius: 20
  })(props.theme)
)

import { Box, css, Flex, Grid } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BackgroundContainer = styled(Box)((props) =>
  css({
    background: 'black',
    w: '100%'
  })(props.theme)
)

export const Container = styled(Grid)((props) =>
  css({
    gridTemplateColumns: '1fr 1fr',
    width: '100%',
    minH: '30rem'
  })(props.theme)
)

export const PresentationContainer = styled(Flex)((props) =>
  css({
    background: 'brand.background_green_lighter',
    width: '100%',
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 8,
    p: 18,
    zIndex: 3
  })(props.theme)
)

export const DescriptionContainer = styled(Flex)((props) =>
  css({
    background: 'brand.background',
    width: '100%',
    height: '100%',
    flexDir: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 10,
    position: 'relative'
  })(props.theme)
)

export const AuthorContainer = styled(Flex)((props) =>
  css({
    alignItems: 'center',
    columnGap: 18,
    justifyContent: 'flex-start',
    left: '-7.03rem',
    position: 'absolute'
  })(props.theme)
)

export const PhotoFrame = styled(Flex)((props) =>
  css({
    aspectRatio: 1,
    width: '14.06rem',
    background: 'brand.background_green_lighter',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  })(props.theme)
)

import { Flex } from '@chakra-ui/react'
import { TSection } from './Section.types'

const Section: React.FC<TSection> = ({ children, ...props }) => {
  return (
    <Flex flexDirection='column' w='100%' {...props} position='relative'>
      {children}
    </Flex>
  )
}

export default Section

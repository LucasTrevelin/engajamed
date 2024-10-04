import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

const BaseboardSection: React.FC = () => {
  return (
    <Flex justifyContent='space-between' alignItems='center'>
      <Image
        src='/images/waves_baseboard_left.jpg'
        bottom={'0.875rem'}
        left={0}
        aspectRatio={1.67 / 1}
        width='40%'
        zIndex={1}
      />
      <Image
        src='/images/logo_blue.jpg'
        bottom={6}
        right={0}
        aspectRatio={2.95 / 1}
      />
    </Flex>
  )
}

export default BaseboardSection

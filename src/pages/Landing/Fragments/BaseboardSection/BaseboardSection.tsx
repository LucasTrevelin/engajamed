import { Image } from '@chakra-ui/react'
import React from 'react'

const BaseboardSection: React.FC = () => {
  return (
    <>
      <Image
        src='/images/waves_baseboard_left.jpg'
        position='absolute'
        bottom={0}
        left={0}
        aspectRatio={1.67 / 1}
        width='40%'
        zIndex={1}
      />
      <Image
        src='/images/logo_blue.jpg'
        position='absolute'
        bottom={2}
        right={0}
        aspectRatio={2.95 / 1}
      />
    </>
  )
}

export default BaseboardSection

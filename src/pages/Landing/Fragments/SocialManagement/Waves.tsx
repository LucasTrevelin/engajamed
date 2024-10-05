import { Image } from '@chakra-ui/react'
import React from 'react'

const Waves: React.FC = () => {
  return (
    <>
      <Image
        src='/images/header_waves.jpg'
        top={0}
        position={'absolute'}
        w='100%'
        alt='images_waves_header'
      />
      <Image
        src='/images/base_waves.png'
        bottom={0}
        position={'absolute'}
        w='100%'
        alt='images_waves_base'
      />
    </>
  )
}

export default Waves

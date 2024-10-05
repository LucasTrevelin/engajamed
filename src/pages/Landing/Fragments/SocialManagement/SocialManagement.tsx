import React from 'react'
import * as S from './SocialManagement.styled'
import Waves from './Waves'
import { Heading } from '@chakra-ui/react'
import { Timeline } from './Timeline'

const SocialManagement: React.FC = () => {
  return (
    <S.Container>
      <Waves />
      <Heading
        fontSize='4xl'
        color='brands.background_green'
        textAlign='left'
        pl={20}
      >
        Gestão de Redes Sociais
      </Heading>
      <Heading fontSize='large' color='brand.subtitle' textAlign='left' pl={20}>
        Etapas do Processo
      </Heading>
      <Timeline />
    </S.Container>
  )
}

export default SocialManagement

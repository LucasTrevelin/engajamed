import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Container } from './Services.styled'

const Services: React.FC = () => {
  return (
    <Flex
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      w='100%'
    >
      <Flex w='100%'>
        <Container background='brand.background_green_lighter'>
          <Text fontSize='4xl' color='white' textAlign='center'>
            Serviços de Marketing oferecidos
          </Text>
          <Text fontSize='sm' color='white' maxW='32rem' textAlign='left'>
            *O investimento total (Gestão de Redes Sociais + Facebook Ads) não
            contempla o valor dos créditos que serão pagos ao Meta. Os valores
            de crédito para as campanhas é determinado pelo próprio cliente para
            cada uma das ferramentas.
          </Text>
        </Container>
        <Container background='brands.background'>
          <Image src='/images/services_1.jpg' />
        </Container>
      </Flex>
      <Flex w='100%'>
        <Container background='brands.background'>
          <Image src='/images/services_2.jpg' />
        </Container>
        <Container background='brand.background_blue'>
          <Text fontSize='4xl' color='white' textAlign='center'>
            Serviços adicionais
          </Text>
          <Text fontSize='sm' color='white' maxW='32rem' textAlign='right'>
            *Dominio e manutenção do site são pagos a parte pelo contratante.
          </Text>
        </Container>
      </Flex>
    </Flex>
  )
}

export default Services

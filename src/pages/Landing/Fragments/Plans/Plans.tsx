import React from 'react'
import * as S from './Plans.styled'
import { Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { PlansPoints } from './Plans.constants'

const Plans: React.FC = () => {
  return (
    <Flex flexDir='column' w='100%'>
      <S.TopicContainer boxShadow={'dark-lg'}>
        <Heading fontSize='4xl' color='#ffffff' pl={10}>
          Planos
        </Heading>
        <S.Allegory id='allegory' />
      </S.TopicContainer>
      <S.BodyContainer>
        <S.PlanContainer>
          <Heading fontSize='3xl' color='brand.letter_highlight'>
            Rede Social e Tráfego Pago:
          </Heading>
          <S.PlanBox>
            <UnorderedList>
              {PlansPoints.marketing.map((point, index) => (
                <ListItem key={`point-${index}`} textAlign='left'>
                  <Text fontSize='lg'>{`${point};`}</Text>
                </ListItem>
              ))}
            </UnorderedList>
            <Flex
              w='100%'
              flexDir='column'
              justifyContent='center'
              alignItems='center'
              rowGap={4}
            >
              <S.HighlightBox>
                <Text fontSize='lg' textAlign='center'>
                  <strong>
                    R$ 950 mensal <br />
                    Nos 3 primeiros meses
                  </strong>
                </Text>
              </S.HighlightBox>
              <Text
                fontSize='sm'
                textAlign='left'
                color='brand.letter_highlight'
              >
                Após os 3 primeiros meses R$1200,00
              </Text>
            </Flex>
          </S.PlanBox>
        </S.PlanContainer>
        <S.PlanContainer>
          <Heading fontSize='2xl' color='brand.letter_highlight'>
            Outros serviços:
          </Heading>
          <S.PlanBox>
            <UnorderedList>
              {PlansPoints.other.map((point, index) => (
                <ListItem key={`point-${index}`} textAlign='left'>
                  <Flex columnGap={2}>
                    <Text fontSize='lg'>{`${point.text}:`}</Text>{' '}
                    <Text
                      fontSize='lg'
                      color='brand.letter_highlight'
                    >{`R$ ${point.price},00:`}</Text>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          </S.PlanBox>
        </S.PlanContainer>
      </S.BodyContainer>
    </Flex>
  )
}

export default Plans

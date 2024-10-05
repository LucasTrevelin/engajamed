import React from 'react'
import * as S from './Timeline.styled'
import Steps from './Fragments/Steps/Steps'
import { timelineSteps } from './Timeline.constants'

const Timeline: React.FC = () => {
  return (
    <S.Container>
      <Steps steps={timelineSteps} />
    </S.Container>
  )
}

export default Timeline

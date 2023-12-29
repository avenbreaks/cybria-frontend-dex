import React from 'react' // Remove useState, useCallback
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@zaigar-finance/uikit' // Remove useModal
import { useTranslation } from 'contexts/Localization'

const StyledRoadmapCard = styled(Card)`
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

// const Label = styled.div`
//   color: ${({ theme }) => theme.colors.textSubtle};
//   font-size: 14px;
// `

// const Actions = styled.div`
//   display: flex;
//   margin-top: 24px;
//   button {
//     flex: 1 0 50%;
//   }
// `

const RoadmapCard = () => {
  const { t } = useTranslation()

  return (
    <StyledRoadmapCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('RoadMap')}
        </Heading>
        <Block>
          <CardImage src="/images/zai/roadmap.jpg" alt="Roadmap image" width={2000} height={2000} />
        </Block>
        <Button>
          <Block>
            <a href="https://docs.zaigar.finance/roadmap">Detail Roadmap Cybria</a>
          </Block>
        </Button>
      </CardBody>
    </StyledRoadmapCard>
  )
}

export default RoadmapCard

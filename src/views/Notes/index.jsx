import React from 'react'
import * as S from './style'
import { PriorityList } from '../../components/Resources/PriorityList'

export const Notes = () => {
  return (
    <S.Container>
      <S.PreviewContent>
        <S.Title>Anotações</S.Title>
      </S.PreviewContent>
      <S.Content>
        <PriorityList />
      </S.Content>
    </S.Container >
  )
}

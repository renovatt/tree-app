import React from 'react'
import * as S from './style'
import soon from '../../../assets/soon.png'

export const Stats = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image onLoad={({ target }) => target.style.opacity = 1} src={soon} />
        <S.Desc>Disponível em futuras atualizações</S.Desc>
      </S.ImageContainer>
    </S.Container>
  )
}

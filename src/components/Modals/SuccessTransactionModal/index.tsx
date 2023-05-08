import * as S from './style'
import { GiCheckMark } from 'react-icons/gi'

export const SuccessTransactionModal = () => {
    return (
        <S.ModalContainer>
            <S.Content>
                <S.Icon><GiCheckMark /></S.Icon>
                <S.Title>Transação Realizada com Sucesso!</S.Title>
            </S.Content>
        </S.ModalContainer>
    )
}

import * as S from './style'

export const DefaultPreview = ({ value, text, svg }: any) => {
    return (
        <S.Container>
            <S.Card>
                <S.Text>{text}</S.Text>
                <S.Content>
                    <S.Value>{value}</S.Value>
                    <S.Value>{svg}</S.Value>
                </S.Content>
            </S.Card>
        </S.Container>
    )
}

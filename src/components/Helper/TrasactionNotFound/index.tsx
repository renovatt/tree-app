import * as S from './style'
import notFound from '../../../assets/not-found.png'

export const TrasactionNotFound = ({ text }: { text: string }) => {
    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
        event.currentTarget.style.opacity = "1";
    }
    return (
        <S.Container>
            <S.Image onLoad={handleLoad} src={notFound} />
            <S.Desc>{text}</S.Desc>
        </S.Container>
    )
}

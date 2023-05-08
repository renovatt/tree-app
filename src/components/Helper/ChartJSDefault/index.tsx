import * as S from './style'
import graphic from '../../../assets/graphic-default.png'

export const ChartJSDefault = ({ text }: { text: string }) => {
    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
        event.currentTarget.style.opacity = "1";
    }
    return (
        <S.Container>
            <S.Image onLoad={handleLoad} src={graphic} alt='graphic-image' />
            <S.Desc>{text}</S.Desc>
        </S.Container>
    )
}

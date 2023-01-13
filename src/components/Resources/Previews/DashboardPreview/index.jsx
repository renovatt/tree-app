import React from 'react'
import * as S from './style'
import { AiOutlineDollar } from 'react-icons/ai'
import { calculator, dolarConversionCalculator } from '../../../../conections/calculator'

export const DashboardPreview = ({ firebaseData, text }) => {
    const [wallet, setWallet] = React.useState(0)
    const [dolarValue, setDolarValue] = React.useState(0)
    const [convertedValue, setConvertedValue] = React.useState(0);
    const [toogle, setToogle] = React.useState(false);

    React.useEffect(() => {
        calculator(firebaseData, setWallet, setDolarValue)
    }, [firebaseData])

    React.useEffect(() => {
        dolarConversionCalculator(dolarValue, setConvertedValue)
    }, [toogle])

    return (
        <S.Container>
            <S.Card>
                <AiOutlineDollar onClick={() => setToogle(!toogle)} />
                <S.Content>
                    {!toogle && <S.Value>{wallet}</S.Value>}
                    {toogle && <S.Value>{convertedValue}</S.Value>}
                    <S.Text>{text}</S.Text>
                </S.Content>
            </S.Card>
        </S.Container>
    )
}

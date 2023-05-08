import React from 'react'
import * as S from './style'
import { auth } from '../../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsShieldFillCheck, BsShieldFillExclamation } from 'react-icons/bs';
import { RiShieldFlashFill } from 'react-icons/ri';
import {
    handlePriorityListObserver,
    handleSavePriorityList
} from '../../../conections/notes';
import { ItemListPriority } from '../Tables/ItemListPriority';
import { DataPriorityListProps } from '../../../@types';

export const PriorityList = () => {
    const [user] = useAuthState(auth);
    const listRef = React.useRef<HTMLDivElement>(null)
    const [resume, setResume] = React.useState('')
    const [level, setLevel] = React.useState('min')
    const [firebasePriorityListData, setFirebasePriorityListData] = React.useState<DataPriorityListProps>([])

    function handleSaveMonthlyExpense(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        handleSavePriorityList(resume, level, user?.uid as string)
        setResume('')
    }

    React.useEffect(() => {
        handlePriorityListObserver(user?.uid as string, setFirebasePriorityListData)
        return () => handlePriorityListObserver(user?.uid as string, setFirebasePriorityListData)
    }, [])

    React.useEffect(() => {
        listRef.current?.scrollTo(0, -listRef.current.scrollHeight)
    }, [firebasePriorityListData])
    return (
        <S.Container>
            <S.PrioritiesList>
                <S.Header>
                    <S.SubTitle>Lista de Prioridades</S.SubTitle>
                    <S.Form onSubmit={handleSaveMonthlyExpense}>
                        <S.Input
                            type='text'
                            required
                            maxLength={15}
                            value={resume}
                            placeholder='Digite seu item'
                            onChange={({ target }) => setResume(target.value)} />

                        <S.InputsContainer>
                            <S.Label htmlFor="level">
                                <S.Span>Mínima</S.Span>
                                <S.ToogleInput
                                    className='min'
                                    id='min'
                                    type='radio'
                                    name='level'
                                    value="min"
                                    defaultChecked
                                    onChange={({ target }) => setLevel(target.value)} />
                            </S.Label>

                            <S.Label htmlFor="level">
                                <S.Span>Média</S.Span>
                                <S.ToogleInput
                                    className='medium'
                                    id='medium'
                                    type='radio'
                                    name='level'
                                    value="medium"
                                    onChange={({ target }) => setLevel(target.value)} />
                            </S.Label>

                            <S.Label htmlFor="level">
                                <S.Span>Máxima</S.Span>
                                <S.ToogleInput
                                    className='max'
                                    id='max'
                                    type='radio'
                                    name='level'
                                    value="max"
                                    placeholder='Máxima'
                                    onChange={({ target }) => setLevel(target.value)} />
                            </S.Label>
                        </S.InputsContainer>
                        <S.Add type='submit'>Salvar</S.Add>
                    </S.Form>
                </S.Header>

                <S.ListContainer ref={listRef}>
                    {firebasePriorityListData.length ? firebasePriorityListData
                        .map((list, index) => (
                            <ItemListPriority
                                key={index}
                                id={list.id}
                                resume={list.resume}
                                color={
                                    list.level === 'min' ? "#22c55e" :
                                        list.level === 'medium' ? "#e89611" : "#ef4444"}
                                svg={
                                    list.level === 'min' ? <BsShieldFillCheck /> : list.level === 'medium' ? <BsShieldFillExclamation /> : <RiShieldFlashFill />
                                } />
                        )) : (
                        <ItemListPriority
                            id='0'
                            color="#fff"
                            svg={<BsShieldFillExclamation />}
                            resume="Você ainda não possui itens" />)}
                </S.ListContainer>
            </S.PrioritiesList>
        </S.Container>
    )
}

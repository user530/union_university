import type { FC } from 'react';
import type { IProduct, IProgramme } from '../../../types';
import { Programme } from '../articles';
import { StyledContainer } from '../../styles';
import React from 'react';
import { fetchProgrammes } from '../../../services/api';
import { validateProgramme } from '../../../services/validateData';
import { transformData } from '../../../services/transformData';

interface IProgrammesProps {
    displayAmount: number;
}

export const Programmes: FC<IProgrammesProps> = ({ displayAmount }) => {
    // const programmes1: IProgramme[] = [
    //     {
    //         id: 1,
    //         title: 'Антикризисное управление',
    //         modules: [
    //             {
    //                 id: 1,
    //                 title: '1 модуль',
    //                 disciplines: [
    //                     {
    //                         id: 1,
    //                         title: 'Маркетинговые стратегии антикризисного менеджмента',
    //                     },
    //                     {
    //                         id: 2,
    //                         title: 'Антикризисное управление предприятиями: реструктуризация, банкротство, слияние и поглощение',
    //                     },
    //                     {
    //                         id: 3,
    //                         title: 'Правовые основы антикризисного управления',
    //                     },
    //                     {
    //                         id: 4,
    //                         title: 'Проектный менеджмент в антикризисном управлении',
    //                     },
    //                     {
    //                         id: 5,
    //                         title: 'Финансово-экономические инструменты антикризисного управления',
    //                     },
    //                 ],
    //             },
    //             {
    //                 id: 2,
    //                 title: '2 модуль',
    //                 disciplines: [
    //                     {
    //                         id: 1,
    //                         title: 'Формирование и развитие компетенций в антикризисном управлении',
    //                     },
    //                     {
    //                         id: 2,
    //                         title: 'Анализ и диагностика кризисных угроз в управлении',
    //                     },
    //                     {
    //                         id: 3,
    //                         title: 'Инструменты антикризисного менеджмента',
    //                     },
    //                     {
    //                         id: 4,
    //                         title: 'Механизмы антикризисного управления бизнесом',
    //                     },
    //                     {
    //                         id: 5,
    //                         title: 'Антикризисный консалтинг',
    //                     },
    //                 ],
    //             },
    //         ]
    //     },
    //     {
    //         id: 2,
    //         title: 'Управление малым бизнесом',
    //         modules: [
    //             {
    //                 id: 21,
    //                 title: '1 Модуль',
    //                 disciplines: [
    //                     {
    //                         id: 1,
    //                         title: 'Управление в сфере малого бизнеса',
    //                     },
    //                     {
    //                         id: 2,
    //                         title: 'Управление start-up-проектами',
    //                     },
    //                     {
    //                         id: 3,
    //                         title: 'Предпринимательство и предпринимательские проекты',
    //                     },
    //                     {
    //                         id: 4,
    //                         title: 'Анализ и моделирование бизнес-процессов',
    //                     },
    //                     {
    //                         id: 5,
    //                         title: 'Оценка и управление стоимостью бизнеса',
    //                     },
    //                 ],
    //             },
    //             {
    //                 id: 22,
    //                 title: '2 Модуль',
    //                 disciplines: [
    //                     {
    //                         id: 1,
    //                         title: 'Стратегии развития и управление ростом бизнеса',
    //                     },
    //                     {
    //                         id: 2,
    //                         title: 'Стратегическое финансовое управление бизнесом на основе ценностно-ориентированного подхода',
    //                     },
    //                     {
    //                         id: 3,
    //                         title: 'Бизнес-процессы и оргструктура компании',
    //                     },
    //                     {
    //                         id: 4,
    //                         title: 'Налоговый менеджмент компании',
    //                     },
    //                     {
    //                         id: 5,
    //                         title: 'Правовые основы предпринимательской деятельности',
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         id: 3,
    //         title: 'Антикризисное управление2',
    //         modules: [
    //             {
    //                 id: 1,
    //                 title: '1 модуль',
    //                 disciplines: [
    //                     {
    //                         id: 1,
    //                         title: 'Маркетинговые стратегии антикризисного менеджмента',
    //                     },
    //                     {
    //                         id: 2,
    //                         title: 'Антикризисное управление предприятиями: реструктуризация, банкротство, слияние и поглощение',
    //                     },
    //                     {
    //                         id: 3,
    //                         title: 'Правовые основы антикризисного управления',
    //                     },
    //                     {
    //                         id: 4,
    //                         title: 'Проектный менеджмент в антикризисном управлении',
    //                     },
    //                     {
    //                         id: 5,
    //                         title: 'Финансово-экономические инструменты антикризисного управления',
    //                     },
    //                 ],
    //             },
    //             {
    //                 id: 2,
    //                 title: '2 модуль',
    //                 disciplines: [
    //                     {
    //                         id: 1,
    //                         title: 'Формирование и развитие компетенций в антикризисном управлении',
    //                     },
    //                     {
    //                         id: 2,
    //                         title: 'Анализ и диагностика кризисных угроз в управлении',
    //                     },
    //                     {
    //                         id: 3,
    //                         title: 'Инструменты антикризисного менеджмента',
    //                     },
    //                     {
    //                         id: 4,
    //                         title: 'Механизмы антикризисного управления бизнесом',
    //                     },
    //                     {
    //                         id: 5,
    //                         title: 'Антикризисный консалтинг',
    //                     },
    //                 ],
    //             },
    //         ]
    //     },
    //     {
    //         id: 4,
    //         title: 'Управление малым бизнесом2',
    //         modules: [
    //             {
    //                 id: 21,
    //                 title: '1 Модуль',
    //                 disciplines: [
    //                     {
    //                         id: 1,
    //                         title: 'Управление в сфере малого бизнеса',
    //                     },
    //                     {
    //                         id: 2,
    //                         title: 'Управление start-up-проектами',
    //                     },
    //                     {
    //                         id: 3,
    //                         title: 'Предпринимательство и предпринимательские проекты',
    //                     },
    //                     {
    //                         id: 4,
    //                         title: 'Анализ и моделирование бизнес-процессов',
    //                     },
    //                     {
    //                         id: 5,
    //                         title: 'Оценка и управление стоимостью бизнеса',
    //                     },
    //                 ],
    //             },
    //             {
    //                 id: 22,
    //                 title: '2 Модуль',
    //                 disciplines: [
    //                     {
    //                         id: 1,
    //                         title: 'Стратегии развития и управление ростом бизнеса',
    //                     },
    //                     {
    //                         id: 2,
    //                         title: 'Стратегическое финансовое управление бизнесом на основе ценностно-ориентированного подхода',
    //                     },
    //                     {
    //                         id: 3,
    //                         title: 'Бизнес-процессы и оргструктура компании',
    //                     },
    //                     {
    //                         id: 4,
    //                         title: 'Налоговый менеджмент компании',
    //                     },
    //                     {
    //                         id: 5,
    //                         title: 'Правовые основы предпринимательской деятельности',
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         id: 5,
    //         title: 'Антикризисное управление3',
    //         modules: [
    //             {
    //                 id: 1,
    //                 title: '1 модуль',
    //                 disciplines: [
    //                     {
    //                         id: 1,
    //                         title: 'Маркетинговые стратегии антикризисного менеджмента',
    //                     },
    //                     {
    //                         id: 2,
    //                         title: 'Антикризисное управление предприятиями: реструктуризация, банкротство, слияние и поглощение',
    //                     },
    //                     {
    //                         id: 3,
    //                         title: 'Правовые основы антикризисного управления',
    //                     },
    //                     {
    //                         id: 4,
    //                         title: 'Проектный менеджмент в антикризисном управлении',
    //                     },
    //                     {
    //                         id: 5,
    //                         title: 'Финансово-экономические инструменты антикризисного управления',
    //                     },
    //                 ],
    //             },
    //             {
    //                 id: 2,
    //                 title: '2 модуль',
    //                 disciplines: [
    //                     {
    //                         id: 1,
    //                         title: 'Формирование и развитие компетенций в антикризисном управлении',
    //                     },
    //                     {
    //                         id: 2,
    //                         title: 'Анализ и диагностика кризисных угроз в управлении',
    //                     },
    //                     {
    //                         id: 3,
    //                         title: 'Инструменты антикризисного менеджмента',
    //                     },
    //                     {
    //                         id: 4,
    //                         title: 'Механизмы антикризисного управления бизнесом',
    //                     },
    //                     {
    //                         id: 5,
    //                         title: 'Антикризисный консалтинг',
    //                     },
    //                 ],
    //             },
    //         ]
    //     },
    //     {
    //         id: 6,
    //         title: 'Управление малым бизнесом3',
    //         modules: [
    //             {
    //                 id: 21,
    //                 title: '1 Модуль',
    //                 disciplines: [
    //                     {
    //                         id: 1,
    //                         title: 'Управление в сфере малого бизнеса',
    //                     },
    //                     {
    //                         id: 2,
    //                         title: 'Управление start-up-проектами',
    //                     },
    //                     {
    //                         id: 3,
    //                         title: 'Предпринимательство и предпринимательские проекты',
    //                     },
    //                     {
    //                         id: 4,
    //                         title: 'Анализ и моделирование бизнес-процессов',
    //                     },
    //                     {
    //                         id: 5,
    //                         title: 'Оценка и управление стоимостью бизнеса',
    //                     },
    //                 ],
    //             },
    //             {
    //                 id: 22,
    //                 title: '2 Модуль',
    //                 disciplines: [
    //                     {
    //                         id: 1,
    //                         title: 'Стратегии развития и управление ростом бизнеса',
    //                     },
    //                     {
    //                         id: 2,
    //                         title: 'Стратегическое финансовое управление бизнесом на основе ценностно-ориентированного подхода',
    //                     },
    //                     {
    //                         id: 3,
    //                         title: 'Бизнес-процессы и оргструктура компании',
    //                     },
    //                     {
    //                         id: 4,
    //                         title: 'Налоговый менеджмент компании',
    //                     },
    //                     {
    //                         id: 5,
    //                         title: 'Правовые основы предпринимательской деятельности',
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    // ];
    const [programmes, setProgrammes] = React.useState<(null | IProgramme)[]>(
        new Array(displayAmount).fill(null)
    );
    const controllerRef = React.useRef(new AbortController());
    const dataCounter = React.useRef(0);
    const offset = React.useRef(0);

    React.useEffect(() => {
        const controller = controllerRef.current;

        const fetchAndFill = async () => {
            try {
                while (dataCounter.current < displayAmount && offset.current < 20) {
                    const batchData = await fetchProgrammes(
                        '/products',
                        displayAmount - dataCounter.current,
                        offset.current,
                        controller
                    );

                    console.log('Batch data: ', batchData);

                    const toAdd: IProgramme[] = [];

                    batchData.forEach(
                        (programm: IProduct) => {
                            if (
                                !validateProgramme(programm)
                                || dataCounter.current >= displayAmount
                            )
                                return;

                            toAdd.push(transformData(programm));
                        }
                    );

                    console.log('To add: ', toAdd);

                    if (toAdd.length > 0)
                        setProgrammes(
                            (current) => {
                                const newProgrammes = [...current];
                                console.log('Current proggrames ', newProgrammes);
                                console.log('Current counter: ', dataCounter.current);
                                toAdd.forEach(
                                    (item, index) => {
                                        console.log(item, index)
                                        if (!item) return;
                                        newProgrammes[dataCounter.current++] = item;
                                    }
                                );
                                console.log('After the addition ', newProgrammes);
                                console.log('counter: ', dataCounter.current);
                                return newProgrammes;
                            }
                        );

                    offset.current += batchData.length;
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchAndFill();

        return () => {
            controller.abort();
            controllerRef.current = new AbortController();
        };
    },
        [displayAmount]
    );

    return (
        <section>
            <StyledContainer >
                {
                    programmes.map(
                        (programme, ind) => <Programme
                            key={(programme && programme.id) ?? ind}
                            programme={programme}
                        />
                    )
                }
            </StyledContainer>
        </section>
    );
}
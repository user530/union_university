import type { FC } from 'react';
import type { IGeneralModuleCards } from '../types';
import { DefaultPageLayout } from '../layouts';
import { CurriculumPageHeader } from '../components/specific/headers';
import { GeneralModules, Programmes } from '../components/specific/sections';

export const CurriculumPage: FC = () => {
    const cardsData: IGeneralModuleCards = [
        {
            id: 1,
            title: 'Практические модули',
            type: 'text',
            data: 'Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе',
            isAccented: true,
        },
        {
            id: 2,
            title: 'Итоговая аттестация',
            type: 'list',
            data: [
                'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
                'Защита итоговой аттестационной работы',
            ],
        },
    ];

    return (
        <DefaultPageLayout>
            <CurriculumPageHeader />
            <Programmes displayAmount={5} />
            <GeneralModules cardsData={cardsData} />
        </DefaultPageLayout>
    );
}
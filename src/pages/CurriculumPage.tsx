import type { FC } from 'react';
import type { IGeneralModuleCards } from '../types';
import { DefaultPageLayout } from '../layouts';
import { CurriculumPageHeader } from '../components/specific/headers';
import { GeneralModules, Programmes } from '../components/specific/sections';

export const CurriculumPage: FC = () => {
    const generalCardsData: IGeneralModuleCards = [
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

    // React.useEffect(
    //     () => {
    //         const controller = controllerRef.current;
    //         async function fillData() {
    //             const batchData: any[] = await fetchProgrammes('/products', 5, 0, controller);

    //             if (!batchData) return;

    //             console.log('Fetched: ', batchData);
    //             batchData.forEach(
    //                 (progr) => {
    //                     console.log('Checking ', progr);
    //                     const skills = extractSkills(progr);
    //                     console.log('Skills ', skills);
    //                     if (!skills) return;
    //                     console.log('Before set data ');

    //                     setData(
    //                         (current) => {
    //                             console.log('Set data fired');
    //                             return current.map(
    //                                 (item, index) => {
    //                                     console.log(item, index, index === counter)
    //                                     return index === counter ? progr : item
    //                                 }
    //                             )
    //                         }
    //                     )
    //                 }
    //             )
    //         };

    //         function extractSkills(programme: any) {
    //             if (!programme
    //                 || !programme.specializedSubjects
    //                 || programme.specializedSubjects.length < 1)
    //                 return null;

    //             const skills = (programme.specializedSubjects as any[]).reduce<any[]>(
    //                 (skills, subject) => { return skills.concat(subject.skills) }, []
    //             );

    //             if (skills.length < 2)
    //                 return null;

    //             return skills;
    //         }

    //         try {
    //             // Execute
    //             fillData();
    //         } catch (error) {
    //             console.log(error);
    //         }

    //         return () => {
    //             controller.abort();
    //             controllerRef.current = new AbortController();
    //         }
    //     },
    //     []
    // );

    return (
        <DefaultPageLayout>
            <CurriculumPageHeader />
            <Programmes displayAmount={5} />
            <GeneralModules cardsData={generalCardsData} />
        </DefaultPageLayout>
    );
}
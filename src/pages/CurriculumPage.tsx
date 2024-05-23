import type { FC } from 'react';
import { DefaultPageLayout } from '../layouts';
import { CurriculumPageHeader } from '../components/specific/headers';
import { GeneralModules, Programmes } from '../components/specific/sections';

export const CurriculumPage: FC = () => {
    return (
        <DefaultPageLayout>
            <CurriculumPageHeader />
            <Programmes />
            <GeneralModules />
        </DefaultPageLayout>
    );
}
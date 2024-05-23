interface IGeneralModuleCard {
    id: number;
    title: string;
    type: 'text' | 'list';
    data: string | string[];
    isAccented?: boolean;
}

interface IGeneralModuleTextCard extends IGeneralModuleCard {
    type: 'text';
    data: string;
}

interface IGeneralModuleListCard extends IGeneralModuleCard {
    type: 'list';
    data: string[];
}

export type IGeneralModuleCards = (
    | IGeneralModuleTextCard
    | IGeneralModuleListCard
)[];
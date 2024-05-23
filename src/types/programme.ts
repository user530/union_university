import type { ISkill } from './data';

export interface IProgramme {
    id: number;
    title: string;
    modules: IProgrammeModule[];
}

export interface IProgrammeModule {
    id: number;
    title: string;
    disciplines: IDiscipline[];
}

interface IDiscipline extends ISkill { }

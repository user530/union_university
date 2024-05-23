export interface IProduct {
    id: number;
    title: string;
    specializedSubjects: ISubject[];
}

export interface ISubject {
    id: number;
    title: string;
    skills: ISkill[];
}

export interface ISkill {
    id: number;
    title: string;
}
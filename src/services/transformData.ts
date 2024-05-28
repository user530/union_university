import { IProduct, IProgramme, IProgrammeModule, ISkill } from '../types';

export const transformData = (product: IProduct): IProgramme => {
    const { id, title, specializedSubjects } = product;

    const disciplines = specializedSubjects.reduce<ISkill[]>(
        (total, subject) => {
            total = total.concat(subject.skills);
            return total;
        },
        []
    );

    const pivot = Math.ceil(disciplines.length / 2);

    const modules: IProgrammeModule[] = [
        {
            id: id * 10 + 1,
            title: 'Модуль 1',
            disciplines: disciplines.slice(0, pivot),
        },
        {
            id: id * 10 + 2,
            title: 'Модуль 2',
            disciplines: disciplines.slice(pivot),
        },
    ]

    return {
        id,
        title,
        modules,
    };
}
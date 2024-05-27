export const validateProgramme = (item: unknown): boolean => {
    if (
        !item
        || !(typeof item === 'object')
        || !('specializedSubjects' in item)
        || !Array.isArray(item.specializedSubjects)
    ) return false;

    const skills = item.specializedSubjects.reduce<unknown[]>(
        (total, subject) => {
            if (('skills' in subject) && Array.isArray(subject.skills))
                total = total.concat(subject.skills);

            return total;
        },
        []
    );

    if (skills.length > 0)
        return true;
    else
        return false;
};
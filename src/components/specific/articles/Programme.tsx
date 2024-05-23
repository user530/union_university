import type { FC } from 'react';
import type { IProgramme } from '../../../types';
import { Module } from '../cards/Module';

interface IProgrammeProps extends IProgramme { }

export const Programme: FC<IProgrammeProps> = ({ title, modules }) => {
    return (
        <article>
            <h2>{title}</h2>
            <div>
                {
                    modules.map(
                        (module) => (<Module key={module.id} {...module} />)
                    )
                }
            </div>
        </article>
    );
}
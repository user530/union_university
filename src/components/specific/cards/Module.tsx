import type { FC } from 'react';
import type { IProgrammeModule } from '../../../types';

interface IModuleProps extends IProgrammeModule { }

export const Module: FC<IModuleProps> = ({ title, disciplines }) => {
    return (
        <div>
            <div>
                <h3>{title}</h3>
            </div>

            <div>
                <ul>
                    {
                        disciplines.map(
                            ({ id, title }) => <li key={id}>{title}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}
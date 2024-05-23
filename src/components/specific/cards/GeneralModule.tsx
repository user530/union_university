import type { FC, PropsWithChildren } from 'react';

interface IGeneralModuleProps extends PropsWithChildren {
    title: string;
    isAccented?: boolean;
}

interface IGeneralModuleTextProps extends IGeneralModuleProps {
    data: string;
}

interface IGeneralModuleListProps extends IGeneralModuleProps {
    data: string[];
}

const GeneralModule: FC<IGeneralModuleProps> = ({ title, isAccented, children }) => {
    return (
        <div>
            <h3>{title} {isAccented ? '- Accented' : ''}</h3>
            <div>
                {children}
            </div>
        </div>
    );
}

export const GeneralModuleText: FC<IGeneralModuleTextProps> = ({ title, data, isAccented }) => {
    return (
        <GeneralModule title={title} isAccented={isAccented}>
            <p>{data}</p>
        </GeneralModule>
    );
}


export const GeneralModuleList: FC<IGeneralModuleListProps> = ({ title, data, isAccented }) => {
    return (
        <GeneralModule title={title} isAccented={isAccented}>
            <ul>
                {
                    data.map(
                        (item, index) => <li key={index}>{item}</li>
                    )
                }
            </ul>
        </GeneralModule>
    );
}
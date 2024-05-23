import type { FC } from 'react';
import type { IGeneralModuleCards } from '../../../types';
import { GeneralModuleList, GeneralModuleText } from '../cards';

interface IGeneralModulesProps {
    cardsData: IGeneralModuleCards;
}

export const GeneralModules: FC<IGeneralModulesProps> = ({ cardsData }) => {


    return (
        <section>
            <div>
                <div>
                    {
                        cardsData.map(
                            (card) => (
                                card.type === 'list'
                                    ? <GeneralModuleList key={card.id} {...card} />
                                    : <GeneralModuleText key={card.id} {...card} />
                            )
                        )
                    }
                </div>
            </div>
        </section>
    );
}
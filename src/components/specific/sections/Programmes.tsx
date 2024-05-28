import type { FC } from 'react';
import type { IProduct, IProgramme } from '../../../types';
import { Programme } from '../articles';
import { StyledContainer } from '../../styles';
import React from 'react';
import { fetchProgrammes } from '../../../services/api';
import { validateProgramme } from '../../../services/validateData';
import { transformData } from '../../../services/transformData';

interface IProgrammesProps {
    displayAmount: number;
}

export const Programmes: FC<IProgrammesProps> = ({ displayAmount }) => {
    const [programmes, setProgrammes] = React.useState<(null | IProgramme)[]>(
        new Array(displayAmount).fill(null)
    );
    const controllerRef = React.useRef(new AbortController());
    const dataCounter = React.useRef(0);
    const offset = React.useRef(0);
    const dataStore = React.useRef<(null | IProgramme)[]>(programmes);

    React.useEffect(() => {
        const controller = controllerRef.current;

        const fetchAndFill = async () => {
            try {
                while (dataCounter.current < displayAmount && offset.current < 50) {
                    // Fetch a next batch
                    const batchData = await fetchProgrammes(
                        '/products',
                        displayAmount - dataCounter.current,
                        offset.current,
                        controller
                    );

                    // Prepare variable to store valid items
                    const toAdd: IProgramme[] = [];

                    // Iterate over fetched data and validate
                    batchData.forEach(
                        (programm: IProduct) => {
                            if (
                                !validateProgramme(programm)
                                || dataCounter.current >= displayAmount
                            )
                                return;

                            toAdd.push(transformData(programm));
                        }
                    );

                    // If there are valid items
                    if (toAdd.length > 0) {
                        // Prepare new state based on stored data
                        const newProgrammes = [...dataStore.current];

                        // Iterate over valid batch items and add them to the new state at current position
                        toAdd.forEach(
                            (item) => {
                                if (!item) return;
                                newProgrammes[dataCounter.current++] = item;
                            }
                        );

                        // Update temporary data store and update set (without que)
                        dataStore.current = newProgrammes;
                        setProgrammes(newProgrammes);
                    }

                    // Update fetch offset counter for the next iteration
                    offset.current += batchData.length;
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchAndFill();

        return () => {
            controller.abort();
            controllerRef.current = new AbortController();
        };
    },
        [displayAmount]
    );

    return (
        <section>
            <StyledContainer >
                {
                    programmes.map(
                        (programme, ind) => <Programme
                            key={(programme && programme.id) ?? ind}
                            programme={programme}
                        />
                    )
                }
            </StyledContainer>
        </section>
    );
}
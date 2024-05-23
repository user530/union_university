import type { FC, PropsWithChildren } from 'react';

export const Main: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    );
}
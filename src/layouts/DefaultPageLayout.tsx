import type { PropsWithChildren, FC } from 'react';
import { Footer, Header, Main } from '../components/common';

export const DefaultPageLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />

            <Main>
                {children}
            </Main>

            <Footer />
        </>
    );
}
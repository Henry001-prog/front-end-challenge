import React from "react";

import { Container } from './styles';

export default function Content({children}: any): JSX.Element {
    return (
        <Container>
            {children}
        </Container>
    );
}
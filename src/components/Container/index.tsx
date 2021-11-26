import React from "react";

import { Container } from './styles';

export default function Card({children}: any): JSX.Element {
    return (
        <Container>
            {children}
        </Container>
    );
}
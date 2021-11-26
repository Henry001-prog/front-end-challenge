import React from 'react';
import { Nav, Div, Li, LinkPage, Home } from './styles';

export default function Menu(): JSX.Element {
    return (
        <Nav>
            <Div>
                <Home>
                    <LinkPage to='/'>Home</LinkPage>
                </Home>

                <Li>
                    <LinkPage to='/cardspage'>Desafio 1</LinkPage>
                </Li>

                <Li>
                    <LinkPage to='/chartpage' style={{}}>Desafio 2</LinkPage>
                </Li>
            </Div>
        </Nav>
    );
}
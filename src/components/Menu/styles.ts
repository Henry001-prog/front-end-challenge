import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    flex-direction: row;
    padding: 2%;
    background-color: black;
    opacity: 0.9;
    list-style-type: none;
    
`;

export const Div = styled.div`
    display: flex;
    padding-right: 1%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Li = styled.li`
    display: flex;
    padding-right: 3%;
    padding-left: 5%;
    font-size: 1.3em;
    align-items: center;
    @media(min-width: 280px) and (max-width: 653px) {
        padding-right: 0px;
        padding-left: 9px;
    }
`;

export const Home = styled.li`
    display: flex;
    padding-right: 10%;
    font-size: 1em;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
`;

export const LinkPage = styled(Link)`
    background-color: transparent;
    color: #DCDCDC;
    font-size: 1em;
    text-decoration: none;
    list-style-type: none;
`;
import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    height: 83vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    align-self: center;
    background-color: lightblue;
    padding: 58px 0px 0px 0px;
    text-align: center;
`;

export const MobileContainer = styled.div`
    flex: 1;
    height: 62vh;
    width: 100vw;
    max-width: 550px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    align-self: center;
    background-color: lightblue;
    padding: 51% 0px 0px 0px;
    text-align: center;
    @media(min-width: 768px) and (max-width: 1024px) {
        max-width: 769px;
    }
    @media(min-width: 1024px) and (max-width: 1366px) {
        max-width: 1026px;
    }
    @media(min-width: 600px) and (max-width: 1024px) {
        padding: 15% 0px 3px 0px;
    }
    @media(min-width: 800px) and (max-width: 1280px) {
        padding: 16% 17% 3px 3%;
        max-width: 1024px;
    }
    @media(min-width: 280px) and (max-width: 653px) {
        height: 100vh;
    }
`;
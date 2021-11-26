import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    height: 89vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    background-color: #DCDCDC;
    padding: 0px 0px 0px 0px;
    text-align: center;
    @media(min-width: 280px) and (max-width: 653px) {
        height: 100%;
    }
    @media(min-width: 768px) and (max-width: 1024px) {
        height: 100%;
    }
    @media(min-width: 800px) and (max-width: 1280px) {
        height: 100%;
    }
`;
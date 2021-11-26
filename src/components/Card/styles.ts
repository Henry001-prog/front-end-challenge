import styled from "styled-components";

export const Content = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 360px;
    width: 370px;
    border-radius: 10px;
    overflow: hidden;
    margin: 20px;
    box-shadow: 3px 3px 5px 4px rgba(0, 0, 0, 0.5);
    background-color: lightblue;
    :hover {
        border: 1px solid #d0d0d0;
    }
`;

export const MobileContent = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 280px;
    border-radius: 10px;
    overflow: hidden;
    margin: 20px;
    box-shadow: 3px 3px 5px 4px rgba(0, 0, 0, 0.5);
    background-color: lightblue;
    :hover {
        border: 1px solid #d0d0d0;
    }
    @media(min-width: 280px) and (max-width: 653px) {
        max-width: 200px;
    }
`;

export const Text = styled.div`
    font-size: 1em;
    margin-bottom: 5%;
`;
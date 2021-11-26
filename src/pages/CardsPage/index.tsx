import React, { useState, useEffect } from "react";
import api from "../../services/api";
import  Card from '../../components/Card';

import {BrowserView, MobileView} from 'react-device-detect';
import { Container } from "./styles";


const CardScreen: React.FC = () => {

    const[temperatures, setTemperatures] = useState([]);
    console.log('dados2:', temperatures);
    
    useEffect(() => {
        loadData();
    }, []);

    async function loadData(): Promise<void> {
        try {
            const response = await api.get(`/desafio_01`);
            const datas = response.data;
            /*const keys = Object.keys(datas);
                const datasWithKeys: any = keys.map(id => {
                    return { ...datas[id], id }
                });*/
            console.log('dados:', datas);
            setTemperatures(datas.data);
        } catch(error) {
            alert("Não foi possível carregar os dados!");
            return;
        }
    }

    return (
        <Container>
            {temperatures.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </Container>
    );
}

export default CardScreen;
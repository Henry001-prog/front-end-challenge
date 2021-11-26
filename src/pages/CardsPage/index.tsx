import React, { useState, useEffect } from "react";
import  Card from '../../components/Card';
import { Container } from "./styles";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import api from "../../services/api";

export interface ITemperature {
    temperatureA: number;
    temperatureB: number;
    statusA: number;
    statusB: number;
    statusC: number;
    statusD: number;
    statusE: number;
    statusF: number;
}

const CardsPage: React.FC = () => {

    const[temperatures, setTemperatures] = useState<ITemperature[]>([]);
    
    useEffect(() => {
        async function loadData(): Promise<void> {
            try {
                const response = await api.get('/desafio_01');
                const datas = response.data;
                setTemperatures(datas.data);
            } catch(error) {
                toast.error('Erro: não foi possível carregar os dados! Tente novamente mais tarde!');
                return;
            }
        }
        loadData();
    }, []);

    return (
        <Container>
            <ToastContainer autoClose={10000} />
            {temperatures.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </Container>
    );
}

export default CardsPage;
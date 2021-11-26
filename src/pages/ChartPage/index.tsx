import React, { useState, useEffect } from "react";
import api from "../../services/api";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

import {BrowserView, MobileView} from 'react-device-detect';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Container, MobileContainer } from "./styles";

export interface IChart {
    date: string;
    generation: number;
    temperature: number;
    consume: number;
}

const ChartPage: React.FC = () => {

    const[temperatures, setTemperatures] = useState<IChart[]>([]);
    
    useEffect(() => {
        loadData();
    }, []);

    async function loadData(): Promise<void> {
        try {
            const response = await api.get('/desafio_02');
            const datas = response.data.data;
            setTemperatures(datas);
        } catch(error) {
            toast.error('Erro: não foi possível carregar os dados! Tente novamente mais tarde!');
            return;
        }
    }

    return (
        <>
            <BrowserView>
                <Container>
                    <ToastContainer autoClose={10000} />
                    <ResponsiveContainer width="99%" aspect={3}>
                        <LineChart
                            width={800}
                            height={400}
                            data={temperatures}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="generation"
                                style={{display: 'flex', paddingLeft: 20}}
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="consume" stroke="#FFA500" />
                        </LineChart>
                    </ResponsiveContainer>
                </Container>
            </BrowserView>

            <MobileView>
                <MobileContainer>
                    <ToastContainer autoClose={10000} />
                    <ResponsiveContainer width="99%" aspect={3}>
                        <LineChart
                            width={800}
                            height={400}
                            data={temperatures}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="generation"
                                style={{display: 'flex', paddingLeft: 20}}
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="consume" stroke="#FFA500" />
                        </LineChart>
                    </ResponsiveContainer>
                </MobileContainer>
            </MobileView>
        </>
        
    );
}

export default ChartPage;
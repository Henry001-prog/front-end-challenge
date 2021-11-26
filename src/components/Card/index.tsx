import React from 'react';
import { Content, Text, MobileContent } from './styles';
import { Container } from '../../components/Container/styles';
import {BrowserView, MobileView} from 'react-device-detect';

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

export default function Card(props: ITemperature): JSX.Element {
  //const temperatureA  = props.temperatureA;
  console.log('temperatura:', props)
    return(
        <>
            <BrowserView>
                <Container>
                    <Content>
                        <Text className='margin-bottom'>TemperatureA: {props.temperatureA}</Text>
                        <Text className='margin-bottom'>TemperatureB: {props.temperatureB}</Text>
                        <Text className='margin-bottom'>StatusA: {props.statusA}</Text>
                        <Text className='margin-bottom'>StatusB: {props.statusB}</Text>
                        <Text className='margin-bottom'>StatusC: {props.statusC}</Text>
                        <Text className='margin-bottom'>StatusD: {props.statusD}</Text>
                        <Text className='margin-bottom'>StatusE: {props.statusE}</Text>
                        <Text className='margin-bottom'>StatusF: {props.statusF}</Text>
                    </Content>
                </Container>
            </BrowserView>

            <MobileView>
                <Container>
                    <MobileContent>
                        <Text className='margin-bottom'>TemperatureA: {props.temperatureA}</Text>
                        <Text className='margin-bottom'>TemperatureB: {props.temperatureB}</Text>
                        <Text className='margin-bottom'>StatusA: {props.statusA}</Text>
                        <Text className='margin-bottom'>StatusB: {props.statusB}</Text>
                        <Text className='margin-bottom'>StatusC: {props.statusC}</Text>
                        <Text className='margin-bottom'>StatusD: {props.statusD}</Text>
                        <Text className='margin-bottom'>StatusE: {props.statusE}</Text>
                        <Text className='margin-bottom'>StatusF: {props.statusF}</Text>
                    </MobileContent>
                </Container>
            </MobileView>
        </>
        
    );
}
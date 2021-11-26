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
                        <Text className='margin-bottom'>temperatureA: {props.temperatureA}</Text>
                        <Text className='margin-bottom'>temperatureB: {props.temperatureB}</Text>
                        <Text className='margin-bottom'>statusA: {props.statusA}</Text>
                        <Text className='margin-bottom'>statusB: {props.statusB}</Text>
                        <Text className='margin-bottom'>statusC: {props.statusC}</Text>
                        <Text className='margin-bottom'>statusD: {props.statusD}</Text>
                        <Text className='margin-bottom'>statusE: {props.statusE}</Text>
                        <Text className='margin-bottom'>statusF: {props.statusF}</Text>
                    </Content>
                </Container>
            </BrowserView>

            <MobileView>
                <Container>
                    <MobileContent>
                        <Text className='margin-bottom'>temperatureA: {props.temperatureA}</Text>
                        <Text className='margin-bottom'>temperatureB: {props.temperatureB}</Text>
                        <Text className='margin-bottom'>statusA: {props.statusA}</Text>
                        <Text className='margin-bottom'>statusB: {props.statusB}</Text>
                        <Text className='margin-bottom'>statusC: {props.statusC}</Text>
                        <Text className='margin-bottom'>statusD: {props.statusD}</Text>
                        <Text className='margin-bottom'>statusE: {props.statusE}</Text>
                        <Text className='margin-bottom'>statusF: {props.statusF}</Text>
                    </MobileContent>
                </Container>
            </MobileView>
        </>
        
    );
}
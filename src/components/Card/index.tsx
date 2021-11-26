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

export interface IProps {
    item: ITemperature;
}

export default function Card(props: ITemperature): JSX.Element {
  //const temperatureA  = props.temperatureA;
  console.log('temperatura:', props)
    return(
        <>
            <BrowserView>
                <Container>
                    <Content>
                        <Text>temperatureA: {props.temperatureA}</Text>
                        <Text>temperatureB: {props.temperatureB}</Text>
                        <Text>statusA: {props.statusA}</Text>
                        <Text>statusB: {props.statusB}</Text>
                        <Text>statusC: {props.statusC}</Text>
                        <Text>statusD: {props.statusD}</Text>
                        <Text>statusE: {props.statusE}</Text>
                        <Text>statusF: {props.statusF}</Text>
                    </Content>
                </Container>
            </BrowserView>

            <MobileView>
                <Container>
                    <MobileContent>
                        <Text>temperatureA: {props.temperatureA}</Text>
                        <Text>temperatureB: {props.temperatureB}</Text>
                        <Text>statusA: {props.statusA}</Text>
                        <Text>statusB: {props.statusB}</Text>
                        <Text>statusC: {props.statusC}</Text>
                        <Text>statusD: {props.statusD}</Text>
                        <Text>statusE: {props.statusE}</Text>
                        <Text>statusF: {props.statusF}</Text>
                    </MobileContent>
                </Container>
            </MobileView>
        </>
        
    );
}
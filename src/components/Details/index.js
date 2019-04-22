import React, {Component} from 'react';

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';

import uberx from '../../assets/uberx.png';

export default class Details extends Component {
    render(){
        return <Container>
            <TypeTitle>Popular</TypeTitle>
            <TypeDescription>Viagens Baratas para o dia a dia</TypeDescription>

            <TypeImage source={uberx} />
            <TypeTitle>LuscasX</TypeTitle>
            <TypeDescription>R$0,00</TypeDescription>

            <RequestButton onPress={ () => {}}>

            <RequestButtonText>Solicitar LuscasX</RequestButtonText>

            </RequestButton>
        </Container>
    }
};

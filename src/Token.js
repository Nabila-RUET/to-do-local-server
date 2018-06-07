import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const pStyle = {
    P: {
        textAlign: 'left',
    },

 spStyle:{
     color:'#00FFFF',
     fontWeight: 'bold'
        }
    
}
const Token = ({ counter, title }) => {
    return (
        <Container>
            <Row>
                <Col >
                    <h5 style={pStyle.P}><span style={pStyle.spStyle}>{counter}</span>{title}</h5>
                </Col></Row>
        </Container>

    );
};
export default Token;
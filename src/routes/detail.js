import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {

    // useParams라는 hook을 이용해 api에 적힌 id=숫자(App.js 에 있는 :id 값) 값을 받아올 수 있다. 
    let {id} = useParams();

    return (
    <Container>
        <Row>
            <Col>
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </Col>
            <Col>
                <h4 className="py-5">{props.shoes[id].title}</h4>
                <p>{props.shoes[id].content}</p>
                <p>{props.shoes[id].price}원</p>
                <Button variant="danger">주문하기</Button>
            </Col>
        </Row>
    </Container>
    )
}

export default Detail;

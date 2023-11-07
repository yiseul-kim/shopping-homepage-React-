import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {

    // useParams라는 hook을 이용해 api에 적힌 id=숫자(App.js 에 있는 :id 값) 값을 받아올 수 있다. 
    let { id } = useParams();
    let img = id - 1;

    let 찾은상품 = props.shoes.find(
        function (x) { return x.id == img }
    )

    //가나다 정렬시 상세페이지가 불규칙해지는 문제 해결하기
    return (
        <Container>
            <Row>
                <Col>
                    <img src={'https://codingapple1.github.io/shop/shoes' + id + '.jpg'} width="100%" />
                </Col>
                <Col>
                    {props.shoes.map(shoe => {
                        if (shoe.id === img) {
                            return (
                                <div key={shoe.id}>
                                    <h4 className="py-5">{찾은상품.title}</h4>
                                    <p>{찾은상품.content}</p>
                                    <p>{찾은상품.price}원</p>
                                    <Button variant="danger">주문하기</Button>
                                </div>
                            );
                        }
                        return null;
                    })}

                </Col>
            </Row>
        </Container>
    )
}

export default Detail;

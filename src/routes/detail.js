import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


// styled-components 사용하기
// App.module.css 로 작명해서 만들면 App.js에서만 사용가능 함 (종속된다.)
let RedBtn = styled.button`
    background : red;
    color : white;
    padding : 10px;
    width : 100px;
`
// 백그라운드 색상 재활용 하기
let RedBtn1 = styled.button`
    background : ${props => props.bg};
    color : ${props => props.bg == 'blue' ? 'black' : 'white' };
    padding : 10px;
    width : 100px;
`

let Box = styled.div`
    background : grey;
    padding : 20px;
    width : 150px;
`


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
            <Box>
                <RedBtn>버튼</RedBtn>
                <RedBtn1 bg="blue">버튼</RedBtn1>
            </Box>
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

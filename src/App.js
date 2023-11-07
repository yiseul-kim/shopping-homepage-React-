import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './data';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' ></div>

      {/* 오늘의 숙제 :
      1. 오늘 만든 상품목록을 컴포넌트로 만들어봅시다. 컴포넌트도 길면 다른 파일로 빼도 상관없음
      2. 컴포넌트만들면 그 안에 데이터바인딩도 아마 다시해야겠군요
      3. 반복적인 html이나 컴포넌트를 발견하면 연습삼아 map 반복문을 써봅시다. */}

      <Container>
        <Row>
          {
            shoes.map((a, i) => {
              return (
                <Card shoes={shoes[i]} i={i} />
              )
            })
          }

          {/* 
           - map을 쓰기 전 -
          <Card shoes={shoes[0]} i={1} />
          <Card shoes={shoes[1]} i={2} />
          <Card shoes={shoes[2]} i={3} /> 
          */}
        </Row>
      </Container>

    </div>
  );
}

function Card(props) {
  return (
    <Col>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'}
        width="80%" />
      <h5>{props.shoes.title}</h5>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App;

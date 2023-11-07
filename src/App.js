import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './data';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            메인페이지

            <div className='main-bg' ></div>
            <Container>
              <Row>
                {
                  shoes.map((a, i) => {
                    return (
                      <Card shoes={shoes[i]} i={i} />
                    )
                  })
                }
              </Row>
            </Container>

            {/* react-router-dom Link 사용법 */}
            {/* 
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> 
            */}


          </>}
        />
        <Route path="/detail" element={<div>상세페이지</div>} />
      </Routes>



    </div>
  );
}

function Card(props) {
  return (
    <Col>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'}
        width="80%" />
      <h5>{props.shoes.title}</h5>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App;

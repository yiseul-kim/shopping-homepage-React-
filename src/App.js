import { useState } from 'react'
import './App.css'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import data from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/detail.js'

function App() {

  let [shoes] = useState(data);
  // hook : 유용한 것을 정리해주는 tool
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
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
          </>}
        />
        
        {/* url 파라미터 */}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

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

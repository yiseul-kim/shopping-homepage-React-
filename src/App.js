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

        <Route path="/detail" element={<Detail />} />

        {/* 지정된 페이지 이외에 접속일때 없는 페이지라는 문구 띄우기 */}
        <Route path="*" element={<div> 없는 페이지 입니다. (404 Error) </div>} />

        {/* nested Routes */}
        <Route path="/about" element={<About />} >
          <Route path="member" element={<div> 멤버 </div>} />  {/* /about/member */}
          <Route path="location" element={<div> 위치정보 </div>} />  {/* /about/location */}
        </Route>

        <Route path="/event" element={<Event />} >
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
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

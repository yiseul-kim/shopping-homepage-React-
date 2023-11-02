import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';

function App() {
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

      <Container>
        <Row>
          <Col>
            {/* process.env.PUBLIC_URL로 경로를 자세히 설정 : 만약 페이지 경로를 /와 같은 
            상대경로로 잡을 경우 서브페이지에 발행되거나 할 때 자신의 파일 경로를 잡지 못하는 경우 */}
            <img src={process.env.PUBLIC_URL + '/logo192.png'} width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;

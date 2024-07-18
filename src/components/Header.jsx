import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar bg="pink" data-bs-theme="dark">
                <Container>
                    <Link to="/" className="navbar-brand">Main</Link>
                    <Nav className="me-auto">
                        <Link to="/joinForm">회원가입</Link>
                        <span> | </span>
                        <Link to="/loginForm">로그인</Link>
                        <span> | </span>
                        <Link to="/insertForm">상품등록</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
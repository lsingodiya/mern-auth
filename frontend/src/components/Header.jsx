import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <Navbar
        expand="lg"
        className="border-bottom"
        style={{
          backgroundColor: '#fff',
          padding: '0.9rem 0',
        }}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand
              style={{
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: '-0.02em',
                color: '#111',
              }}
            >
              DevOps Training
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-2">
              {userInfo ? (
                <NavDropdown
                  title={userInfo.name}
                  id="username"
                  align="end"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>
                      My Profile
                    </NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Divider />

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link
                      style={{
                        fontWeight: 500,
                        color: '#495057',
                      }}
                    >
                      Login
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/register">
                    <Nav.Link
                      style={{
                        fontWeight: 600,
                        padding: '0.4rem 0.9rem',
                        borderRadius: '8px',
                        border: '1px solid #dee2e6',
                      }}
                    >
                      Enroll
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

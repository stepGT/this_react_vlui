import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, Container, Button } from 'react-bootstrap';
import { test } from '../redux/valStatusV1Slice';

const Menu = () => {
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(test('br'));
  };
  return (
    <Container>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          Valorant UI
        </Link>
        <Nav>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link className='pe-3' to="/">
                <Button variant="primary">Content</Button>
              </Link>
            </li>
            <li>
              <Link className="pe-3" to="/status">
                <Button variant="secondary">Status</Button>
              </Link>
            </li>
            <li>
              <Button onClick={handlerClick} variant="outline-danger">
                Test
              </Button>
            </li>
          </ul>
        </Nav>
      </header>
    </Container>
  );
};

export default Menu;

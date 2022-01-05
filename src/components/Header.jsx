import { Table, Container } from 'react-bootstrap';
const Header = ({ head, description, data }) => {
  const keys = data ? Object.keys(data) : [];
  const values = data ? Object.values(data) : [];

  return (
    <Container>
      <div className="starter-template text-center mt-5">
        <h1>{ head }</h1>
        <p className="lead text-capitalize">{description}</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              {keys.map((el, ind) => {
                return <th key={ind}>{el}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {values.map((el, ind) => {
                return <td key={ind}>{el}</td>;
              })}
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Header;

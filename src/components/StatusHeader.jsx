import { Container, Row, Form, Table } from 'react-bootstrap';
const StatusHeader = ({ head, description, status }) => {
  return (
    <Container>
      <div className="starter-template text-center mt-5">
        <h1>{head}</h1>
        <p className="lead text-capitalize">{description}</p>
        <Row>
          <Form>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {status &&
                    status.map((el, ind) => {
                      return <th>{el.id}</th>;
                    })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {status &&
                    status.map((el, ind) => {
                      return <td key={ind}>{el.name}</td>;
                    })}
                </tr>
              </tbody>
            </Table>
          </Form>
        </Row>
      </div>
    </Container>
  );
};

export default StatusHeader;

import { Container, Row, Form, Table } from 'react-bootstrap';
const StatusHeader = ({ head, description, status }) => {
  return (
    <Container>
      <div className="starter-template text-center mt-5">
        <h1>{head}</h1>
        <p className="lead text-capitalize">{description}</p>
        <Row className="mb-3">
          <Form>
            {status.map((el, ind) => {
              return (
                <Form.Check
                  checked={ind === 0 ? true : false}
                  value={el.id}
                  onChange={() => {}}
                  key={ind}
                  inline
                  type="radio"
                  label={el.id}
                />
              );
            })}
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </Table>
        </Row>
      </div>
    </Container>
  );
};

export default StatusHeader;

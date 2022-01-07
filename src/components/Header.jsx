import { useState } from 'react';
import { Form, Row, Table, Container } from 'react-bootstrap';
const Header = ({ head, description, data, regions, fetchStatus }) => {
  const keys = data ? Object.keys(data) : [];
  const values = data ? Object.values(data) : [];
  const [valueRadio, setValueRadio] = useState('EU');
  const handleChange = (e) => {
    setValueRadio(e.target.value);
    fetchStatus(e.target.value);
  };

  return (
    <Container>
      <div className="starter-template text-center mt-5">
        <h1>{ head }</h1>
        <p className="lead text-capitalize">{description}</p>
        <Row className="mb-3">
          <Form>
            {regions && regions.map((region, index) => {
              let checked = valueRadio === region ? true : false;
              return (
                <Form.Check
                  checked={checked}
                  value={region}
                  onChange={handleChange}
                  key={index}
                  inline
                  type="radio"
                  label={region}
                />
              );
            })}
          </Form>
        </Row>
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
                if (Array.isArray(el)) {
                  return (
                    <td key={ind}>
                      <Form.Select size="lg">
                        {el.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </Form.Select>
                    </td>
                  );
                }
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

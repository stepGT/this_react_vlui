import { useState } from 'react';
import { Form, Row, Container } from 'react-bootstrap';
import Loader from '../components/Loader';

const ContentHeader = ({ data, description, head, isFetching }) => {
  const keys = data ? Object.keys(data) : [];
  const [valueRadio, setValueRadio] = useState('version');
  const handleChange = (e) => {
    setValueRadio(e.target.value);
  };
  return (
    <Container>
      <div className="starter-template text-center mt-5">
        <h1>{head}</h1>
        <p className="lead text-capitalize">{description}</p>
        <Row className="mb-3">
          {isFetching ? (
            <Loader />
          ) : (
            <Form>
              {keys &&
                keys.map((key, index) => {
                  let checked = valueRadio === key ? true : false;
                  return (
                    <Form.Check
                      checked={checked}
                      value={key}
                      onChange={handleChange}
                      key={index}
                      inline
                      type="radio"
                      label={key}
                    />
                  );
                })}
            </Form>
          )}
        </Row>
      </div>
    </Container>
  );
};

export default ContentHeader;

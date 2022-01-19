import { useState, useEffect } from 'react';
import { Form, Row, Container, Select } from 'react-bootstrap';
import Loader from '../components/Loader';

const ContentHeader = ({ data, description, head, isFetching }) => {
  const keys = data ? Object.keys(data) : [];
  const [valueRadio, setValueRadio] = useState('acts');
  const [allContent, setAllContent] = useState([]);
  const [itemContent, setItemContent] = useState([]);
  const handleChange = (e) => {
    setValueRadio(e.target.value);
    setItemContent(allContent[e.target.value]);
  };
  useEffect(() => {
    setAllContent(data);
    setItemContent(allContent['acts']);
  }, [data, allContent]);
  return (
    <Container>
      <div className="starter-template text-center mt-5">
        <h1>{head}</h1>
        <p className="lead text-capitalize">{description}</p>
        <Row className="mb-3">
          {isFetching ? (
            <Loader />
          ) : (
            <>
              <Form>
                {keys.sort().map((key, index) => {
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
              <Form.Select className="mt-3" aria-label="Default select example">
                {Array.isArray(itemContent) ? (
                  itemContent.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })
                ) : (
                  <option>{itemContent}</option>
                )}
              </Form.Select>
            </>
          )}
        </Row>
      </div>
    </Container>
  );
};

export default ContentHeader;

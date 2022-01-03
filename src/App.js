import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const valContentV1 =
  'https://eu.api.riotgames.com/val/content/v1/contents?api_key=RGAPI-a5b3dffd-3e24-464f-ab21-30151ef97763';

function App() {
  const [getContents, setGetContents] = useState({});

  useEffect(() => {
    axios.get(valContentV1).then((res) => setGetContents(res.data));
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Select onChange={handleChange} size="lg">
            {Object.keys(getContents).map((ent, i) => (
              <option value={ent} key={i}>{ent}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

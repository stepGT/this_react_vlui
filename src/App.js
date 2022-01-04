import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const { REACT_APP_VAL_API_KEY } = process.env

const valContentV1 =
  `https://eu.api.riotgames.com/val/content/v1/contents?api_key=${REACT_APP_VAL_API_KEY}`;

function App() {
  const [getContents, setGetContents] = useState({});
  const [activeEntity, setActiveEntity] = useState([]);

  useEffect(() => {
    axios.get(valContentV1).then((res) => setGetContents(res.data));
  }, []);

  const handleChange = e => setActiveEntity(getContents[e.target.value]);

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
        <Col>
              {
               activeEntity && activeEntity.map((ent) => {
                 return console.log(ent)
               })
              }
        </Col>
      </Row>
    </Container>
  );
}

export default App;

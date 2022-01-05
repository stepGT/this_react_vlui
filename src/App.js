import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import "./App.css";

import Layout from './layout/Layout';

import Content from './pages/Content';
import Status from "./pages/Status";

const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Content />} exact />
          <Route path="/status" element={<Status />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;

import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Layout />
        <Footer />
      </Container>

    </div>
  );
}

export default App;

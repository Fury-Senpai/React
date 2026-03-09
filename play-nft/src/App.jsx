import React from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import Popular from './pages/Popular.jsx';

const App = () => {
  return (
    <main>
      <Header />
      <Home />
      <Popular />
      <Footer />
    </main>
  )
}

export default App;
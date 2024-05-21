// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Humanprogress from './components/Humanprogress'
import Boende from './components/Boende'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GlobalStyles from './components/GlobalStyles'; // Corrected import path


const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles /> {/* Wrap your application with the GlobalStyles component */}
        <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/human" element={<Humanprogress />} />
            <Route path="/boende" element={<Boende />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

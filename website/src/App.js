import React from 'react';
import HomePage from './pages/HomePage';
import RegistrationForm from './pages/RegisterPage';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import ProductDetailPage from './pages/ProductDetailPage';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import VerifySuccessfulPage from './pages/Verify'
import PasswordResetForm from './pages/PasswordResetPage';

const App = () => {

  return (

    <ChakraProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" />
          <Route path="/contact" />
          <Route path="/signup" element={<RegistrationForm />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/passwordreset" element={<PasswordResetForm />}/>
          <Route path="/detail/:id" element={<ProductDetailPage />} />
          <Route path="/register/token/:token" element={<VerifySuccessfulPage />} />
        </Routes>
      </Layout>
    </ChakraProvider>

  );
};

export default App;
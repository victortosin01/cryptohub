import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="exchanges" element={<Exchanges />} />
            <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="crypto/:coinId" element={<CryptoDetails />} />
            <Route path="news" element={<News />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer" level={5} style={{ color: 'white', textAlign: 'center'}}>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          <Link to="/">
            CryptoHub Inc.
          </Link> <br />
          All Rights Reserved. <br />
          Copyright © 2021
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
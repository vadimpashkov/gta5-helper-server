import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>xyuxyuxyu</div>} />
    </Routes>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));

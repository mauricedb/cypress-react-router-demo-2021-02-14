import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CypressHistorySupport } from 'cypress-react-router';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CypressHistorySupport />
        <Route path="/p1">
          <div>This is P1</div>
        </Route>

        <Route path="/" exact>
          <div>This is Home</div>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

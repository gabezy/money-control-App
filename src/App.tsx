import React from "react";
import { BrowserRouter } from "react-router-dom";
import { TransactionProvider } from "./contexts/TransactionContext";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <TransactionProvider>
        <Router />
      </TransactionProvider>
    </BrowserRouter>
  );
}

export default App;

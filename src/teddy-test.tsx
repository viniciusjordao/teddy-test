import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home"
import Customers from "./pages/customers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
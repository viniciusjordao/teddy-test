import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home"
import Customers from "./components/customers";

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
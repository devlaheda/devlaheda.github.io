import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n/config";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

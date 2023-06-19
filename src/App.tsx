import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ErrorPage } from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto px-2 lg:px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

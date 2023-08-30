import { Route, Routes } from "react-router-dom";

//Components
import Header from "./components/Header";

//Pages
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;

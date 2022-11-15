import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import GlobalStyle from "./GlobalStyle/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

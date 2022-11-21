import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import SignUp from "./SignUp/SignUp";
import Extract from "./extract/Extract";
import Add from "./Add/Add";
import Remove from "./Remove/Remove";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Extract" element={<Extract />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Remove" element={<Remove />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

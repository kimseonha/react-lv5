import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from "./pages/users/Home";
import Signup from "./pages/users/Signup";
import Mypage from "./pages/users/Mypage";
import Detail from "./pages/users/TodoDetail";


// 만들 페이지 Home signup mypage
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

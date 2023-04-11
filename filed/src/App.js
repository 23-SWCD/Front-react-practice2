import React from "react";
import { Routes, Route } from "react-router-dom";
import Heading from "./componentss/Heading";
import List from "./componentss/Post/List";
import Upload from "./componentss/Post/Upload";
import Detail from "./componentss/Post/Detail";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Post/:postNum" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;

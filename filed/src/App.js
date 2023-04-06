import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import List from './componentss/List';
import Heading from './componentss/Heading';
import Upload from './componentss/Upload';

function App() {
  const [ContentList, setContentList] = useState([]);

  return (
    <>
      <Heading />
      <Routes>
        <Route path="/list" 
          element={
            <List ContentList={ContentList} setContentList={setContentList} />
          }
        />
        <Route 
        path="/Upload" 
        element={
            <Upload ContentList={ContentList} setContentList={setContentList} />
          } 
        />


      </Routes>
    </>
  );
}

export default App;

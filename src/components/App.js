import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import history from "../history";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

//

const App = () => {
  return (
    <div>
      {/* // REACT_ROUTER V5 Syntax {CHANGED IN V6} (Component)=>(ELEMENT plus)
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </BrowserRouter> 
      */}
      {/* <BrowserRouter history={history}> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<StreamList />} />
          <Route path="/streams/new/:id" element={<StreamCreate />} />
          <Route path="/streams/edit/:id" element={<StreamEdit />} />
          <Route path="/streams/delete/:id" element={<StreamDelete />} />
          <Route path="/streams/show/:id" element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

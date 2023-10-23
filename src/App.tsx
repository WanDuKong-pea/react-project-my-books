import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Signin from './pages/Signin';
import Edit from './pages/Edit';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './pages/Error';

//<Route>의 exact 속성은 V6에서는 제거되었으며, 기본값이 true로 변경되었음
//<Switch>또한 V6에서 <Routes>로 변경되었음
function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/edit:id" element={<Edit />} />
          <Route path="/book:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
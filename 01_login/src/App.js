import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import FindPassword from "./pages/FindPassword";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}> </Route>
          <Route path="/Home" element={<Home />}> </Route>
          <Route path="/findpassword" element={<FindPassword />}> 비밀번호를 잊으셨나요? </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

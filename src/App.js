import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './components/HomePage';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;

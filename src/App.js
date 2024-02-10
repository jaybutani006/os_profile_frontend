import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import ReactTooltip from "react-tooltip";
function App() {
  ReactTooltip.defaults = { place: "top", effect: "solid" };
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

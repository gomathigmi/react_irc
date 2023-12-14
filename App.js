import './App.css';
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Form from './components/Form';
import Registration from './components/Registration';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Form/>}/>
        <Route exact path="/registration" element={<Registration/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

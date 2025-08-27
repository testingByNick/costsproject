import {  Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";


function App() {
  return (
    <BrowserRouter> 
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Company">Company</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/NewProject">New Project</Link>
      </ul>
        <Container customClass="minHeight"> 
          <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/Company" element={<Company/>}/> 
            <Route path= "/Contact" element={<Contact/>}/> 
            <Route path= "/NewProject" element={<NewProject/>}/>    
          </Routes>
        </Container>
      <p>Footer</p>

    </BrowserRouter>
  );
}

export default App
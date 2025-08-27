import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"



function App() {
  return (
    <BrowserRouter> 
      <NavBar />
        <Container customClass="minHeight"> 
          <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/Company" element={<Company/>}/> 
            <Route path= "/Contact" element={<Contact/>}/> 
            <Route path= "/NewProject" element={<NewProject/>}/>    
          </Routes>
        </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App
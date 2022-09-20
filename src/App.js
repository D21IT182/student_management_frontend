import './App.css';
import Footer from './component/Footer';
import NavigationBar from './component/NavigationBar';
import Viewstudent from './component/Viewstudent';
import Container from 'react-bootstrap/esm/Container';
import Student from './component/Student';
import { BrowserRouter, Route , Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
      <Container>
      
      <Routes>
      <Route path="/addStudent" element={<Student/>}/>
      <Route path="/updateStudent/:id" element={<Student/>}/>
      <Route path="/viewStudent" element={<Viewstudent/>}/>
      </Routes>
      
      </Container>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

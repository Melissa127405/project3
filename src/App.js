
import './App.css';
import Header from './components/Header';
import Forms from './components/Forms';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
function App() {
  return (
    <div className="App">
      < Header/>
      <Forms/>
      <Footer/>
    </div>
  );
}

export default App;

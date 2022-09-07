import './App.css';
import { Outlet } from 'react-router';
import Header from './components/Header/Header'
import Footer from './components/Header/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;

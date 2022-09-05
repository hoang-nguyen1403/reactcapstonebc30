import './App.css';
import { Outlet } from 'react-router';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

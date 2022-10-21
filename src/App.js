import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//import { Routes ,Route } from 'react-router-dom';
import './App.css';

import Header1 from './components/Header1';
import PageA from "./components/pageacceuil/pageA";




function App() {
  
  return (
    
    <div className="App">
      <Header1 />
      <PageA />
    </div>
  );
}

export default App;

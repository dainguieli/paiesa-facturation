import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from 'react-router-dom';
import '/home/elidaingui/Documents/paiesa-facturation/fontend/src/components/pageacceuil/page.css';
import './components/Header/new_Header.css'


import PageA from "./components/pageacceuil/pageA";
import Connexion from "./components/connexion/connexion";
import Inscription from "./components/inscription/inscription";
import Dashboard from "./components/Dashboard_admin/Dashboard";


   
/*<Routes>
  
<Route path="/" element={<PageA />} />
<Route path="/Connexion" element={<Connexion />} />
<Route path="/Inscription" element={<Inscription />} />
</Routes>
*/

function App() {

  return (

    <div className="App">
    
     <Dashboard />


    </div>
  );
}

export default App;

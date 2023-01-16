
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {useDocTitle} from "./components/customHooks"

import { NavBar1 } from './components/NavBarC';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
function App() {
  const [doctitle, setDocTitle] = useDocTitle("Dev Set");
  return (
    
    <div className="App">
      <NavBar1 />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

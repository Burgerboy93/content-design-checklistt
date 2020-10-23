import React, {useReducer} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ButtonAppBar from "./components/navbar.js";
import "./App.css";
import Home from "./components/pages/home";
import Strategy from "./components/pages/strategy";
import Scope from "./components/pages/scope";
import Skeleton from "./components/pages/skeleton";
import Structure from "./components/pages/structure";
import Surface from "./components/pages/surface";
import Checklist from "./components/pages/checklist";
import ChecklistContext from './components/services/CheckListContext.js';
import {reducer} from './components/services/useLocalStorage';
import Footer from "./components/footer.js";

function App() {
  const [checklist, dispatch] = useReducer(reducer, []) 
  console.log('Context', ChecklistContext);

  return (
    <ChecklistContext.Provider value={{checklist, dispatch}}>

    <Router>
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
      <addedAlert />

      </header>
    </div>
    <Switch>
    <Route exact path="/content-design-checklist">
      <Home/>
    </Route>
    <Route path="/content-design-checklist/strategy">
      <Strategy />
    </Route>
    <Route path="/content-design-checklist/scope">
      <Scope />
    </Route>
    <Route path="/content-design-checklist/skeleton">
      <Skeleton />
    </Route>
    <Route path="/content-design-checklist/structure">
      <Structure />
    </Route>
    <Route path="/content-design-checklist/surface">
      <Surface />
    </Route>
    <Route path="/content-design-checklist/checklist">
      <Checklist />
    </Route>
    </Switch>
    <Footer />
    </Router>
    </ChecklistContext.Provider>
  );
}

export default App;

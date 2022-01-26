import { Route, Switch} from "react-router-dom";
import { Fragment } from "react";

import Home from "./pages/Home";
import MyStory from "./pages/MyStory";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";
import MainHeader from "./components/Layout/MainHeader";




function App() {
  
  return (
    <Fragment>
      <MainHeader />
    <Switch>
      <Route path='/' exact>
      <Home />
      </Route>
      <Route path='/myStory'>
      <MyStory />
        </Route>
      <Route path='/projects'>
      <Projects />
      </Route>
      <Route path='/courses'>
      <Courses />
      </Route>
      <Route path='*'>
     <NotFound />
      </Route>
    
      
      
      
      
    </Switch>
    </Fragment>
  );
}

export default App;

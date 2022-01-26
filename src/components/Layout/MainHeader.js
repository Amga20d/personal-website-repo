import { Fragment } from "react";
import { NavLink } from "react-router-dom";



import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <Fragment>
       
      <header className={classes.header}>
        <div className={classes.logo}>Amgad Abdullah</div>
        <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/" exact={true}>Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/myStory">My Story</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/baba">Contact</NavLink>
          </li>
        </ul>
        </nav>
      </header>
      
    </Fragment>
  );
}

export default MainHeader;

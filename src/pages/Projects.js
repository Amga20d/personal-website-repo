import classes from "./Projects.module.css"

const Projects = () => {
    return(
<div className={classes.body}>
    
    <h1 className={classes.mainHeader}>My Projects</h1>
<ul className={classes.projects}>
<li className={classes.project}>Project 1</li>
<li className={classes.project}>Project 2</li>
<li className={classes.project}>Project 3</li>
<li className={classes.project}>Project 4</li>
<li className={classes.project}>Project 5</li>


</ul>
</div>)

};


export default Projects;
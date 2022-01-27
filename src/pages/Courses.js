import classes from "./Courses.module.css"

const Courses = () => {
return(
    
<div className={classes.body}>

<h1 className={classes.mainHeader}> My Courses</h1>
<ul className={classes.courses}>
<li className={classes.course}>Course 1</li>
<li className={classes.course}>Course 2</li>
<li className={classes.course}>Course 3</li>
<li className={classes.course}>Course 4</li>

</ul>


</div>

);


}


export default Courses;
import classes from "./MainImage.module.css";
import proImage from "../../assets/prog.jpg";

const MainImage = () => {
  return (<div>
    <section className={classes.layout}>
      <p className={classes.paragraph}> Full Stack Developer & Coffee Enthusiast </p>
      <p className={classes.based}>based in Edmonton,Canada</p>
      </section>
      <div className={classes["main-image"]}>
        <img
          src={proImage}
          alt="Programing Picture"
          className={classes.imagee}
        />
      </div>
    
    </div>
  );
};

export default MainImage;

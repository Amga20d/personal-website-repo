import classes from "./MainImage.module.css";
import proImage from "../../assets/prog.jpg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";


const MainImage = () => {
  return (
    <div >
      <section className={classes.layout}>
        <p className={classes.paragraph}>
          {" "}
          Full Stack Developer & Coffee Enthusiast{" "}
        </p>
        <p className={classes.based}>based in Edmonton,Canada</p>
        <ul className={classes.contacts}>
          <li className={classes.li}>
            <img src={facebook}></img>
          </li>
          <li className={classes.li}>
            <img src={linkedin}></img>
          </li>
          <li className={classes.li}>
            <img src={github}></img>
          </li>
        </ul>
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

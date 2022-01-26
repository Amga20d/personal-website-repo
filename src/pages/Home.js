import MainHeader from "../components/Layout/MainHeader";
import MyStory from "./MyStory";
import Projects from "./Projects";
import Courses from "./Courses";
import MainImage from "../components/Layout/MainImage";






const Home = () => {
  return (
    <div>
     
      <MainImage />
      <MyStory />
      <Projects />
      <Courses />
    </div>
  );
};

export default Home;

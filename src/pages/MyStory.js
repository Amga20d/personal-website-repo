import classes from "./MyStory.module.css"
import personal from "../assets/personal.png"


const MyStory = () => {

    return(
  <div className={classes.body}>
      
      
      
    <h1 className={classes.mainTitle}>My Story</h1>
    <section className={classes.section}>
    <p className={classes.intro}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vel
      aliquam quis reprehenderit consectetur optio itaque perspiciatis nisi non
      fugit alias atque recusandae velit ut soluta quas laboriosam inventore
      unde. Cum, quaerat ea obcaecati dolorem maxime adipisci nemo eaque nulla
      eos id illo dolores eveniet nostrum modi labore consequatur impedit velit
      deserunt quis officia, tempore sint harum ratione. Non, itaque. Dolorem
      dolorum provident, est dolor aliquam ipsam eum. Iusto ad nesciunt illum
      ipsa mollitia adipisci saepe officiis, iste doloribus deleniti sapiente
      commodi, ducimus facere id eaque corrupti aliquam nihil! Rerum! Dolores,
      ut a quis, obcaecati saepe officiis atque, doloremque ratione odio ipsam
      dolor animi iusto delectus eveniet. Quae voluptatum iusto dignissimos?
      Doloribus illo architecto omnis saepe consequuntur voluptate quas unde!
      Quisquam voluptatum suscipit reprehenderit recusandae consectetur odio
      sunt enim eos officiis ad assumenda ut cupiditate perspiciatis distinctio
      et, nemo beatae quos libero aut id. Debitis quidem error dignissimos
      maxime labore.
    </p>
    <img src={personal} alt="Amgad Personal " className={classes.img}></img>
    </section>
  </div>);
};

export default MyStory;

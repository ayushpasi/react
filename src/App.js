import "./UserProfile.css";
import style from "./UserProfile.module.css";
const App = () => {
  //inline style for container
  const styleContainer = { textAlign: "center", margin: "20px" };
  return (
    <div style={styleContainer}>
      <img
        src="https://cdn.pixabay.com/photo/2023/01/03/16/00/dog-7694676_960_720.jpg"
        alt="dog"
        //appling inline style directly
        style={{
          height: "150px",
          weight: "150px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <h2 className="name">Optimized</h2>

      <p className="bio">Fullstack web developer</p>
      <ul className={style.hobbies}>
        <li className={style.hobby}>Coding</li>
        <li className={style.hobby}>Hiking</li>
        <li className={style.hobby}>Travelling</li>
      </ul>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
    </div>
  );
};
export default App;

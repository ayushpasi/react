import "./UserProfile.css";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
const App = () => {
  return (
    //rendring the component
    <>
      <UserProfile
        name="Emanuel"
        email="Emannuel@gmail.com"
        location="Indore"
        about="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form accompanied by English versions from the "
      />
      <Counter />
    </>
  );
};
export default App;

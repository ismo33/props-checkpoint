
import Profile from "./profile/Profile";
import image from '../src/profile/image.jpg'

function App() {
  function handleName(name){
    alert(`this is ${name}'s profile`)
  }
  return (
    <>
    <Profile name="Ismail Ousji" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." profession="Full Stack developer" handleName={handleName} >
      <img style={{width:"100px" , height:"100px"}} src={image} alt="bla"></img>
      </Profile>
      
    </>
  );
}

export default App;

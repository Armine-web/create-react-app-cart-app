import { Header } from'./components/header.js'
import { Main } from'./components/main.js'
import { Footer } from'./components/footer.js'
import items from './items'
import './App.css';


const LoginBanner = ()=>{
  return (
    <div className='ui success message'>
      <div className='header'>
        You are not loged in
      </div>
      <p> Please loge in</p>

    </div>
  )
}
function App() {
  const openingHours = "We are open from 9:00 AM to 6 PM"
  const isUserLogedIn = true;
  return (
    <div className="ui container" style ={{marginTop: "20px"}}>
      <Header  />
      {isUserLogedIn ? null : <LoginBanner />}
      <Main items = {items} />
      <Footer opening = {openingHours}/>
       
    </div>
  );
}

export default App;

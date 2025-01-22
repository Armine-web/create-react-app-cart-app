import { useState } from 'react';
import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { Footer } from './components/footer.js';
import items from './items';
import './App.css';

const LoginBanner = () => {
  return (
    <div className='ui success message'>
      <div className='header'>
        You are not logged in
      </div>
      <p> Please log in</p>
    </div>
  );
};

function App() {
  const openingHours = "We are open from 9:00 AM to 6 PM";
  const isUserLoggedIn = true;
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (filteredData) => {
    setFilteredItems(filteredData); 
  };

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <Header onSearch={handleSearch} />
      {isUserLoggedIn ? null : <LoginBanner />}
      <Main items={filteredItems} /> {}
      <Footer opening={openingHours} />
    </div>
  );
}

export default App;

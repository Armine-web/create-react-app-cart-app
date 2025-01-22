import { useState } from 'react';
import items from '../items'; 

export const Header = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    const query = e.target.value;
    setValue(query);
    const filtered = items.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    onSearch(filtered); 
  };

  return (
    <div className='ui segment cart-header'>
      <div className='cart-avatar'>
        <img 
          alt='avatar'
          className='ui avatar image'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Ape54VRrSC5QPmVv06ddbqqi_ECwx_VRbjzD8-LsEz4dfC6PJoVkmQ7oLBHsk15d74A&usqp=CAU"
        />
        Elliot
      </div>
      
      <div>
        <div className='input ui icon input-bar'>
          <input 
            type="text" 
            placeholder="Search..." 
            value={value} 
            onChange={onChange} 
          />
          <button className='search-button'></button>
        </div>
      </div>

      <div className='headear-checkout'>
        <div className='ui primary button'>
          <i className='shop icon'></i>Checkout
        </div>
      </div>
    </div>
  );
};

import { useState } from 'react';
import items from '../items'; 

export const Header = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]); 

  const onChange = (e) => {
    const query = e.target.value;
    setValue(query);
    setData(data)
    

    const filtered = items.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setData(filtered);
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
        <button className='search-button'><i className="inverted circular search link icon"></i></button>
        </div>
        
        <div className='dropDown-content'>
          {
            value &&
            data.filter(item => (item.title.startsWith(value)) && item.title !== value).slice(0, 3).map(item => 
            <div key = {item.id} onClick={(e) => setValue(item.title)}>
              {item.title.slice(0, 25)}
            </div>)
          }
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

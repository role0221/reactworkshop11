import { useState } from 'react';
import './App.css';
import Dropdown from './Components/Dropdown';
import Food from './Components/Food';
import MenuData from './data/MenuData';

function App() {
  const [foods,setFoods] = useState(MenuData)
  
  const changeFoodMenu=(e)=>{
    const category = e.target.value
    if(category ==="เมนูทั้งหมด"){
      setFoods(MenuData)
    }else{
      const result = MenuData.filter((element)=>{
        return element.menu === category
      })
      setFoods(result)
    }
  }

  return (
    <div className='container'>
      <Dropdown changeFoodMenu={changeFoodMenu}/>
      <div className='content'>
          {foods.map((data,index)=>{
            return <Food key={index} {...data}/>
          })}
      </div>
    </div>
  );
}

export default App;

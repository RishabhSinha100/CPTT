import React, { useContext } from 'react'
 import './Navbar.css'
  import logo from '../../assets/logo.png'
   import  arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency}=useContext(CoinContext)
   const currencyHandler=(event)=>{
        switch(event.target.value){
          case"usd":{
            setCurrency({name:"usd",Symbol:"$"});
            break;
          }
          case"eur":{
            setCurrency({name:"eur",Symbol:"€"});
            break;
          } case"inr":{
            setCurrency({name:"inr",Symbol:"₹"});
            break;
          }
          default:{
            setCurrency({name:"usd",Symbol:"$"});
            break;
          }
        } 
   }
  return (
    <div className='navbar'>
      <Link to={`/`}>
      <img src={logo} alt="" className='logo' />
      </Link> 
       <ul>

       <Link to={`/`}><li>Home</li></Link>
        
       <Link  to={`/Features`}><li>Features</li></Link>
       <Link  to={`/Contacts`}><li>Contact</li></Link>
       <Link  to={`/Blogs`}><li>Blog</li></Link>


     
    
       </ul>

       <div className='nav-right'>
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>

            <button>Sing up<img src={arrow_icon} alt=""/></button>
       </div>

    </div>
  )
}

export default Navbar

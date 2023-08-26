import './Navbar.css';
import Menu from '../img/Menu.png';
import { useState } from 'react';
export default function Navbar(){

    const[pop,setpop]=useState(false)

    const style=()=>{
        if(pop){
            document.querySelector('.pop').style.display="none"
            setpop(!pop)
        }
        else{
            document.querySelector('.pop').style.display="block"
            setpop(!pop)

        }

    }

    return(
        <div className='first_background'>
          <dis className="pop">
             <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>OUR PRODUCTS</li>
                <li>CONATCT US</li>
             </ul>

          </dis>
           
           <div className='content'>
             <nav className='nav'>
                <div className='heading'> 
                    <h1>ShopKart</h1>
                    <img className='menu' src={Menu} alt='ljs' onClick={style}></img>
                    <div className='second'>
                        <p>Bag</p>
                        <p>Whlislist</p>
                    </div>
                </div>
                <hr></hr>
                <ul className='homing'>
                    <li>Home</li>
                    <li>ABOUT</li>
                    <li>OUR  PRODUCTS</li>
                    <li>CONTACT US</li>
                </ul>
             </nav>
            <h1 className='fresh'>FRESH</h1>
            <h1 className='year'>2022</h1>
            <h1 className='look'>LOOK</h1>
           </div>
        </div>
    )
}
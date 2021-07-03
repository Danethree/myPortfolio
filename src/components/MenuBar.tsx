
import '../styles/menu.scss'
import React, {useState} from 'react';
import {Switch,Router} from 'react-router-dom';
import{Link, animateScroll as scroll} from 'react-scroll'
export function MenuBar() {

  const [click,setClick] = useState(true);
  const handleClick = ()=>setClick(!click);
    return(
     <nav>
       
       <label className = "logo"> Daniela Fialho</label>
       <div className="menu-icon" onClick={handleClick}>
      
          <i className={click?"fas fa-bars":"fas fa-times"} id = "threebars"/>
      </div>
        
            <ul className = {click?'before':'after'}>
                   <li>
                   <Link
                activeClass="active"
                to="myPhoto"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                 > 
                      About me
            </Link>
                   </li>
                      <li>  <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                 > 
                     Projects
            </Link></li>
                      <li>  
                    
                        <Link
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
                 > 
                     Contacts
            </Link>
                        
                        
                         </li>
                   
                </ul>
  
     </nav>
    )
}

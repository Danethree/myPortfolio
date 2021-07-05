


import "../styles/uProjects.scss"
import {useState} from "react"
import { UnityPC } from "./UnityPC";
import { UnityMobile } from "./UnityMobile";
import ninja from "../assets/.env.photos/ninja.png"
export function UnityProjectsContent ()
{

 const [isPC,setIsPc] = useState(false);
 const [isMobile,setIsMobile] = useState(false);
 const [isAll,setIsAll] = useState(true);
  function handleClickIsPC(){
        setIsAll(false);
        setIsMobile(false);
        setIsPc(true);
  }
  function handleClickIsMobile(){
    setIsAll(false);
    setIsPc(false);
    setIsMobile(true);
  }
  function handleClickAllProjects(){
    setIsPc(false);
    setIsMobile(false);
    setIsAll(true);
  }
  return (
    <div className = "DivUnityProjects">
     
     < div className = "reactBar">
                <div className = "navReact">
                    <ul className = "ultechnologyButtons">
                        <li className = "submenu"
                                onClick = {handleClickAllProjects}
                            >&nbsp;All &nbsp;
                        </li>
                        &nbsp;| &nbsp;
                        <li className = "submenu"
                            onClick = {handleClickIsPC}
                        >&nbsp;Desktop</li>
                        &nbsp;| &nbsp;
                          
                            <li className = "submenu"
                             onClick = {handleClickIsMobile}>
                                &nbsp;Android
                                </li>
                     </ul>
               </div>
            </div> 
      {isAll&&(
           <div>
              <ul className = "unityList"> <li><UnityPC/>
            <UnityMobile/> </li>
            </ul>
          </div>
        

      )}
      
      {isMobile&&(
           <div>
              <ul className = "unityList"> 
              <li><UnityMobile/> </li>
               <li>
                <a href = "https://mega.nz/folder/CKBiBITQ#DAH4tJXpF0psWfon9i8qlA"><img src = {ninja} id = "projectimg"/></a>
              </li>
            </ul>
          </div>
        

      )}
        {isPC&&(
           <div>
              <ul className = "unityList"> <li>
            <UnityPC/> </li>
            </ul>
          </div>
        

      )}
               

                  
         
     </div>

  )

}
import React from "react";
import { UpdatesDate } from "../../Data/data";
import './Updates.css';
const Updates=()=>{
    return(
        <div className="Updates">
            {
                UpdatesDate.map((update)=>{
                    return(
          <div className="update">
         <img src={update.img} alt=''/>
         <div className="note">
            <div style={{marginBottom:'0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.note}</span>
               </div>
             <span>{update.time}</span>
             </div>
            </div>
   
  
                    );
                })
            }
        </div>
    );
};
export default Updates;
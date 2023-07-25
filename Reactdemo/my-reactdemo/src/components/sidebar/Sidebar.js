import React, { useState } from 'react';
import './Sidebar.css';
import { SidebarData } from '../../Data/data';
import{UilSignOutAlt} from "@iconscout/react-unicons";
import Logo from '../../images/logo.png';
const Sidebar=()=>{
    const[selected, setSelected]=useState();

    return(
        <div className="Sidebar">
            <div className='logo'>
                <img src={Logo} alt='' />
                <span>
                    Sh<span>o</span>p
                </span>
            </div>
            <div className='menu'>
                { SidebarData.map((item, index)=>{
                        return(
                            <div className={selected===index?'menuItem active':'menuItem'}
                            key={index}
                            onClick={()=>setSelected(index)}
                            >
                                <item.icon/>
                                <span>{item.heading}</span>
                                </div>

                        )
                    })
                }
                
                <div className='menuItem'>
                    <div>
                        <UilSignOutAlt/>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
export default Sidebar
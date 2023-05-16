import React from "react";
import  "../static/css/chat.css"
import group_data from "./group_data";
import website_data from "./website_data";
import user_data from "./user_data";


class Group extends React.Component{
    constructor(props) {
        super(props)   
        this.state = {
        group:group_data,
        user:user_data,
        website:website_data,
                     }
    }



    render(){
        return(
            <div>
            <h2>        ***********************************************        مدیریت  گروه ها         ***********************************************</h2>
            <hr/>
            <div className="div_user">
            <table className="user_table">  
            
            <thead>
               <tr>
                 <th className="td_user_table" colspan="2"> ID </th>
                 <th className="td_user_table" colspan="2"> نام گروه </th>
                 <th className="td_user_table" colspan="2"> کاربران  </th>
                 <th className="td_user_table" colspan="2">  تاریخ ایجاد </th>
                 <th className="td_user_table" colspan="2">  وضعیت  </th>
                 <th className="td_user_table" colspan="2">  انتخاب</th>
               </tr>
             </thead>
            
              <tbody>
                
             </tbody>
                
                <tr>
                    <td colspan="2">  </td>
                    <td colspan="2"> {group_data.group_name} </td>
                     <td> {user_data.img} </td> 
                </tr>
             </table>
             
             </div>
           
              
            

             </div> 
        )
        
    }
}


export default Group;


    
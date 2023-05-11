import React from "react";
import "../static/css/chat.css";
import {Avatar} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import user_data from "./user_data";





    
class User extends React.Component{
   render(){
    return(

      <div>     
        
       <div className="search_user">
       <SearchOutlined />
       <input placeholder=" search ... " />
        </div>
     
        <div className="div_user">

          {user_data.map(u =>(
            <table className="user_table">
            <thead>
    
        
            </thead>
            <tbody>

         
            <tr> 
                    <td className="td_user_table" colspan="2"> نام کاربری </td>
                    <td className="td_user_table" colspan="2">  ایمیل </td>
                    <td className="td_user_table" colspan="2">  تاریخ ایجاد </td>
                    <td className="td_user_table" colspan="2">  انتخاب</td>
            </tr>


            
              <tr>  <td className="" colspan="2"> 
               <img src={u.عکس}/>
               <span> {u["نام کاربری "]} </span>
               </td>    
               <td className="" colspan="2"> {u["ایمیل "]} </td>  
               <td className="" colspan="2">  {u["تاریخ ایجاد"]} </td>  

               <td className="checkbox" colspan="2">  <input type="checkbox"/> </td>  
                </tr>
            </tbody>
        </table>

          ))}
            

               </div>
                    
          
              
               <input  className="Add_user" type='button' value = 'اضافه کردن'   />  
               <input className="del_user" type='button' value = 'حذف کردن'   /> 
        </div>
         
          
       

    )
   }
} 


   export default User;   
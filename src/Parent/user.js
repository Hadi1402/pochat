import React from "react";
import "../static/css/chat.css";
import {Avatar} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";





    
class User extends React.Component{
   render(){
    return(

      <div>     
        
       <div className="search_user">
       <SearchOutlined />
       <input placeholder=" search ... " />
        </div>
     
        <div className="div_user">
            <table className="user_table">
                <thead>
                   
                </thead>
                <tbody>
                <tr> 
                        <td className="td_user_table" colspan="2"> ردیف   </td>
                        <td className="td_user_table" colspan="2"> <Avatar />  </td>
                        <td className="td_user_table" colspan="2"> نام کاربری </td>
                        <td className="td_user_table" colspan="2">  ایمیل </td>
                        <td className="td_user_table" colspan="2">  تاریخ ثبت نام </td>
                        <td className="td_user_table" colspan="2">  انتخاب</td>
                </tr>


                
                  <tr>  <td className="" colspan="2"> 1 </td>    
                    <td className="" colspan="2"> ؟؟؟؟؟؟؟؟؟؟؟؟ </td>   
                   <td className="" colspan="2">  ؟؟؟؟؟؟؟؟؟؟؟ </td>  
                   <td className="" colspan="2">  ؟؟؟؟؟؟؟؟؟؟؟ </td>  
                   <td className="" colspan="2">  ؟؟؟؟؟؟؟؟؟؟؟ </td>  

                   <td className="checkbox" colspan="2">  <input type="checkbox"/> </td>  
                    </tr>
                </tbody>
            </table>

               </div>
                 
               <input  className="Add_user" type='button' value = 'اضافه کردن'   />  
               <input className="del_user" type='button' value = 'حذف کردن'   /> 
        </div>
         


    )
   }
} 


   export default User;   
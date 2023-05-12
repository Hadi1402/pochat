import React,{useState,useRef} from 'react';
import "../static/css/chat.css";
import {Avatar} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import user_data from "./user_data";





    
class User extends React.Component{

  constructor(props) {
    super(props)
    this.status_Ref = React.createRef();
    this.check_Ref = React.createRef();
    this.state = {
     status_user:'فعال',
     row_display:'block',
    row_color:"#e4e4e4",
     
    }
   this.onChange = this.onChange.bind(this)
   this.onClick = this.onClick.bind(this) 
     }

   onClick = (e) => {
    const [checked, setChecked] = useState();
      setChecked(e.target.value);
    };



    onChange = (e) => {
     const check=this.check_Ref.current;
     //var checkbox = document.getElementsByClassName('check_box');
     // var  td=document.getElementsByClassName('td_status').innerHTML
       //const [status_user , setstatus_user]=useState('');
         if(check)
         this.setState({status_user:'غیر فعال'})
         // this.setState({row_display:'none'}
    }




   render(){
    return(

      <div>     
        <div className="div_user">
          <div className="search_user">
            <SearchOutlined />
            <input placeholder=" search ... " />
          </div>
         
            <table className="user_table">
            <thead>
            <tr> 
                <th className="td_user_table" colspan="2"> نام کاربری </th>
                <th className="td_user_table" colspan="2">  ایمیل </th>
                <th className="td_user_table" colspan="2">  تاریخ ایجاد </th>
                <th className="td_user_table" colspan="2">  وضعیت کاربر </th> 
                <th className="td_user_table" colspan="2">  انتخاب</th>

            </tr>
    
        
            </thead>
            {user_data.map(u =>(
            <tbody>
          
              <tr className="info_table">  
                <td  colspan="2"> <img  className="img_user" src={u.عکس}/> <span> {u["نام کاربری "]} </span> </td>  
                <td  colspan="2"> {u["ایمیل "]} </td>  
                <td  colspan="2">  {u["تاریخ ایجاد"]} </td> 
                <td ref={this.status_Ref} className="td_status" colspan="2"> {this.state.status_user}  </td>
                <td  className="check_box" colspan="2">  <input 
                     ref={this.check_Ref}
                     type="checkbox" 
                     onClick={onclick}
                     />
                </td>  
              </tr>
            </tbody>
       
          ))}
            
            </table>

        </div>
         <br></br>
          <input className="Add_user" type='button' value = 'اضافه کردن'   />  
          <input className="del_user" type='button' value = 'حذف کردن'   onClick={this.onChange}  /> 
        </div>
         
          
       

    )
   }
} 


   export default User;   
import React from "react";
import ReactDOM from 'react-dom';
import  "../static/css/chat.css";
import group_data from "./group_data";
import website_data from "./website_data";
import user_data from "./user_data";
import { createRef } from "react";

//const data = [[group_data] , [user_data]]
let r=[]

class Group extends React.Component{
    constructor(props) {
        super(props)   
        this.state = {
        group:group_data,
        user:user_data,
        re:r,
         }     
        // {this.state.data.map(u => (


//this.showTableGroup=this.showTableGroup.bind(this)
//this.id_ref = createRef();
//this.group_name_ref = React.createRef();
//this.user_name_ref = React.createRef();
//this.data_create_ref = React.createRef();
//this.status_group_ref = React.createRef();
    }

    /*
      showTableGroup = (e) => {
      this.state.group.forEach((g) =>{
        this.state.user.forEach((u) =>{
          if(g.group_name === u.field)
          this.state.re.push({...g , ...u})
        })
        this.setState({re:this.state.re})
      })

   console.log(r)
       }
      */
           
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

            { this.state.group.forEach((g) =>{
              this.state.user.forEach((u) =>{
              if(g.group_name === u.field)
              this.state.re.push({...g , ...u})
                })
                })
            }

               {this.state.re.map(u =>( 
                <tbody> 
               <tr>
                <td colspan="2">  {u['id']}              </td>
                <td colspan="2">  {u['group_name']}       </td>
                <td colspan="2">  {u['user_name']}       </td>
                <td colspan="2">  {u['data_create']}       </td>
                <td colspan="2">  {u['status_group']}       </td>
              </tr>
            </tbody>
              ))}
            
                  
            

            
             </table>
                         
            <input type="button" value='گروه ها' className="groupbtn" onClick={this.showTableGroup}/>

             </div>
           
            

             </div> 
        )
        
    }
}


export default Group;


    
import React from "react";
import ReactDOM from 'react-dom';
import  "../static/css/chat.css";
import group_data from "./group_data";
import website_data from "./website_data";
import user_data from "./user_data";
import { createRef } from "react";

const combinedData = [...group_data , ...user_data]
class Group extends React.Component{
    constructor(props) {
        super(props)   
        this.state = {
        data:combinedData,
        group:group_data,
        user:user_data,
        
                     }
this.showTableGroup=this.showTableGroup.bind(this)
this.id_ref = createRef();
this.group_name_ref = createRef();
this.user_name_ref = createRef()
this.data_create_ref = createRef();
this.status_group_ref = createRef();
    }

    
      showTableGroup = (e) => {
       this.state.group.forEach(Element =>{
        if(Element['group_name'] == this.state.user.Element['field'])
        parseFloat(ReactDOM.findDOMNode(this.id_ref).textContent = Element['id'])
           ReactDOM.findDOMNode(this.group_name_ref).textContent = Element['group_name'] 
           ReactDOM.findDOMNode(this.user_name_ref).textContent = Element['user_name'] 
       });
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
            
                 
                 <tr> 
                  <td ref={this.id_ref}>  </td> 
                  <td ref={this.group_name_ref}>    </td>  
                  <td ref={this.user_name_ref}>     </td>  
                  <td ref={this.data_create_ref}>   </td>
                  <td ref={this.status_group_ref}>  </td>
                 </tr> 
                
                
              
             </tbody>
             </table>
                         
            <input type="button" className="Active_user" onClick={this.showTableGroup}/>

             </div>
           
            

             </div> 
        )
        
    }
}


export default Group;


    
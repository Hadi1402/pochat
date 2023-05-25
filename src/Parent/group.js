import React from "react";
import ReactDOM from 'react-dom';
import  "../static/css/chat.css";
import group_data from "./group_data";
import { createRef } from "react";
import { Avatar } from "@material-ui/core";
import { TimerSharp } from "@material-ui/icons";

//const data = [[group_data] , [user_data]]

class Group extends React.Component{
 
    constructor(props) {
      super(props)   
        this.state = {
        group:group_data,
        select_checked: [],
         }  
        
        

this.group_ref = createRef();
this.user_ref = createRef();
this.domain_ref = createRef();
this.data_ref = createRef();
this.status_ref = createRef();
this.check_ref = createRef();
//*******************************/
this.id_ref =createRef();
this.gn_ref = createRef();
this.un_ref = createRef();
this.dcn_ref = createRef();
this.sgn_ref = createRef();
/********************************/
this.createGroup = this.createGroup.bind(this)
this.onChange_enable = this.onChange_enable.bind(this)
this.onChange_disable = this.onChange_disable.bind(this) 
this.onClick = this.onClick.bind(this)


        }


 onClick = (event) => {
  
   this.state.select_checked.push(event.target.getAttribute("data_value"))
    this.setState({ select_checked: this.state.select_checked });
   console.log(this.state.select_checked) 
     //this.check_ref.current.checked.push(event.target.getAttribute("data_value"))

          }

    
      /*showTableGroup = (e) => {
        this.state.group.forEach((g) =>{
          this.state.user.forEach((u) =>{
            this.state.website.forEach((w) =>{
          if(g.group_name === u.field && g.group_name === w.type)
          this.state.re.push({...g , ...u , ...w})
            })
            })
          })

   console.log(this.state.re)
       }*/
      

    createGroup = e => {
      var data_new = [
      this.id_ref.current.value=this.id_ref.current.value+1,
      this.group_ref.current.value,
      this.user_ref.current.value,
      this.data_ref.current.value,
      this.status_ref.current.value]
       group_data.push(data_new)
       console.log(group_data)
       console.log(this.state.group)
       this.id_ref.current.value = +1
       this.gn_ref.current.innerHTML = data_new[1]
       this.un_ref.current.innerHTML = data_new[2]
       this.dcn_ref.current.innerHTML = data_new[3]
       this.sgn_ref.current.innerHTML = data_new[4]
      /* this.state.display_list = "block"
      this.setState({style:this.state.display_list})*/
            }


       onChange_enable = (e) => {
        this.group_data.forEach(element => {
        console.log(element, this.state.select_checked, this.state.select_checked.includes(element["id"].toString()));
        if (this.state.select_checked.includes(element["id"].toString())) {
            element["status_group"] = " فعال"}
          this.setState({ group: this.state.group })
            });
            } 

        onChange_disable = (e) => {
          this.state.group.forEach(element => {
          console.log(element, this.state.select_checked, this.state.select_checked.includes(element["id"].toString()));
          if (this.state.select_checked.includes(element["id"].toString())){
           element["status_group"] = "غیر فعال" }
                  });
          this.setState({ group: this.state.group })
          console.log({group:this.state.group})
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
               {this.state.group.map(q =>( 
                 <tbody>
               <tr>
                <td colspan="2" ref={this.id_ref}>  {q['id']}              </td>
                <td colspan="2"  ref={this.gn_ref}>  {q['group_name']}       </td>
                <td colspan="2" ref={this.un_ref}> <span> {q["user_name"]} </span> </td>
                <td colspan="2" ref={this.dcn_ref}>  {q['data_create']}       </td>
                <td colspan="2" ref={this.sgn_ref}>  {q['status_group']}       </td>
                <td className="check_box" colspan="2">  <input
                    type="checkbox" ref={this.check_ref}
                    data_value={q["id"]}
                    onChange={this.onClick}
                  /></td>
              </tr>
              </tbody>
            ))}
           

             </table>
                         
            <input type="button" value='ایجاد گروه' className="groupbtn" onClick={this.showTableGroup}/>
            <input className="Active_site" type='button' value='فعال کردن' onClick={this.onChange_enable} />
            <input className="dActive_site" type='button' value='غیر فعال کردن' onClick={this.onChange_disable} />

            <div className="panel" ref={this.panel_ref} style={{display:this.state.display_panel}}>

            <input type='text' name='group_name'  className="" ref={this.group_ref} placeholder="نام گروه" required/>

            <select name='select'  className="" ref={this.user_ref} placeholder=" کاربر " required > 
           {this.state.group.map(user => (
               <option>{user.user_name[0]}</option>
                 ))}  

           {this.state.group.map(user => (
               <option>{user.user_name[1]}</option>
                 ))}  

            {this.state.group.map(user => (
               <option>{user.user_name[2]}</option>
                 ))}  

                 </select>
             
             <input type='text' name='data_create'  className="" ref={this.data_ref} placeholder="تاریخ ایجاد "/>
            
             <input type='text' name='status_group'  className="" ref={this.status_ref} placeholder="وضعیت"/>
             
             <input type='button' value='تایید' className="btnoky" onClick={this.createGroup} />
             <input type='button' value='بستن' className="btncancel" onClick={this.Cancel} />

             </div>

             </div>
        
          

             </div> 
        )
        
    }
}


export default Group;


    
import React from "react";
import ReactDOM from 'react-dom';
import  "../static/css/chat.css";
import group_data from "./group_data";
import website_data from "./website_data";
import user_data from "./user_data";
import { createRef } from "react";
import { Avatar } from "@material-ui/core";

//const data = [[group_data] , [user_data]]
let r=[]

class Group extends React.Component{
    constructor(props) {
        super(props)   
        this.state = {
        group:group_data,
        user:user_data,
        website:website_data,
        re:r,
        select_checked: [],
         }   

this.group_ref = createRef();
this.user_ref = createRef();
this.domain_ref = createRef();
this.data_ref = createRef();
this.status_ref = createRef();
this.check_ref = createRef();
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

    createGroup = e => {
      this.state.re.forEach(element => {
        element["group_name"]=this.group_ref.current.value;
        console.log("group name is:" ,element["group_name"])
        element["user_name"]=this.user_ref.current.value;
        console.log("user_name:" ,element["user_name"])
        element["domain_name"]=this.domain_ref.current.value;
        console.log('domain name is:',element["domain_name"])
        element["data_create"]=this.data_ref.current.value;
        console.log("data create is:", element["data_create"])
        element["status_group"]=this.status_ref.current.value;
        console.log("status is:" ,  element["status_group"])
       // this.state.display_list = "block"
       // this.setState({style:this.state.display_list})
           });
          }
       onChange_enable = (e) => {
        this.state.re.forEach(element => {
        console.log(element, this.state.select_checked, this.state.select_checked.includes(element["id"].toString()));
        if (this.state.select_checked.includes(element["id"].toString())) {
            element["status_group"] = " فعال"}
          this.setState({ re: this.state.re })
            });
            } 

        onChange_disable = (e) => {
          this.state.re.forEach(element => {
          console.log(element, this.state.select_checked, this.state.select_checked.includes(element["id"].toString()));
          if (this.state.select_checked.includes(element["id"].toString())){
           element["status_group"] = "غیر فعال" }
                  });
          this.setState({ re: this.state.re })
          console.log({re:this.state.re})
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
                 <th className="td_user_table" colspan="2"> نام سایت  </th>
                 <th className="td_user_table" colspan="2">  تاریخ ایجاد </th>
                 <th className="td_user_table" colspan="2">  وضعیت  </th>
                 <th className="td_user_table" colspan="2">  انتخاب</th>
               </tr>
             </thead>
            { this.state.group.forEach((g) =>{
              this.state.user.forEach((u) =>{
                this.state.website.forEach((w) =>{
              if(g.group_name === u.field && g.group_name === w.type)
              this.state.re.push({...g , ...u , ...w})
                })
                })
              })
            } 
               {this.state.re.map(u =>( 
                 <tbody>
               <tr>
                <td colspan="2">  {u['id']}              </td>
                <td colspan="2">  {u['group_name']}       </td>
                <td colspan="2">  <img className="img_user" src={u.img} /> <span> {u["user_name"]} </span>    </td>
                <td colspan="2">  {u['domain_name']}       </td>
                <td colspan="2">  {u['data_create']}       </td>
                <td colspan="2">  {u['status_group']}       </td>
                <td className="check_box" colspan="2">  <input
                    type="checkbox" ref={this.check_ref}
                    data_value={u["id"]}
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
               
            <input type='text' name='user_name'  className="" ref={this.user_ref} placeholder=" کاربر " required/>
                   
             <input type='text' name='domain_name'  className="" ref={this.domain_ref} placeholder="نام سایت"/>
             
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


    
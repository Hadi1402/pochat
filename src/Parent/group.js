import React,{ Component } from "react";
import ReactDOM from 'react-dom';
import  "../static/css/chat.css";
import group_data from "./group_data";
import { createRef } from "react";
import { Avatar, easing } from "@material-ui/core";
import Select from 'react-select';
import user_data from "./user_data";
//import editGroup from "./editGroup"
import { NavLink, navigate } from "react-router-dom";
import editGroup from "../Actions/editGroupTable";
import { connect } from "react-redux";
import axios from "axios"


class Group extends React.Component{
    constructor(props) {
      super(props) 
      var user_options = []
      for (let i=0; i<user_data.length; i++){
          user_options.push(
            {value:user_data[i].id, label:user_data[i].user_name}
          )
        }

        console.log(user_options)
        this.state = {
        group:[],
        select_checked: [],
        values: [''],
        users:user_options,
        selectOption:'',
       }

    this.id_ref = createRef();    
    this.group_ref = createRef();
    this.username_ref = createRef();
    this.data_ref = createRef();
    this.status_ref = createRef();
    this.check_ref = createRef();
//**********************************************************/

    this.createGroup = this.createGroup.bind(this)
    this.onChange_enable = this.onChange_enable.bind(this)
    this.onChange_disable = this.onChange_disable.bind(this) 
    this.onClick = this.onClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.edit_transfer = this.edit_transfer.bind(this)
    }


  componentDidMount = () =>{
    axios.get('http://localhost/data/group_data.json').then(res =>{
            console.log(res.data)
            this.setState({group:res.data})
            console.log(this.state.group)
        });                 
      }
 


  onClick = (event) => {
    this.state.select_checked.push(event.target.getAttribute("data_value"))
    this.setState({ select_checked: this.state.select_checked });
    console.log(this.state.select_checked) 
  //  axios.post("sdfsdf/dsdfs", {
    //  "group_name": input_ref.current.value(),
   //   "dhvscjk":
   // })
     //this.check_ref.current.checked.push(event.target.getAttribute("data_value"))
          }

     /* showTableGroup = (e) => {
        this.state.group.forEach((g) =>{
          this.state.user.forEach((u) =>{
            this.state.website.forEach((w) =>{
          if(g.group_name === u.field && g.group_name === w.type)
          this.state.re.push({...g , ...u , ...w})
            })
            })
          })
   console.log(this.state.re)
   function handleSelect(data) {

       }*/


    createGroup = (event) => {
      this.state.group.forEach(element => {
        element['id'] = this.id_ref.current.value;
        element["group_name"] = this.group_ref.current.value;
        //for(let j=0 ; j<this.state.selectOption.length; j++){}
        element["user_name"] = this.state.selectOption[0].label
        console.log(this.username_ref.current.value)
        console.log('selecttt uaers:', element["user_name"])
        element["data_create"] = this.data_ref.current.value;
        element["status_group"] = this.status_ref.current.value;
        console.log({group:this.state.group})
          })
      this.setState({group:this.state.group})
      }


  onChange_disable = (e) => {
    this.state.group.forEach(element => {
    console.log(element, this.state.select_checked, this.state.select_checked.includes(element["id"].toString()));
      if (this.state.select_checked.includes(element["id"].toString())){
        element["status_group"] = "غیر فعال" }
                  });
      this.setState({ group: this.state.group })
           }
          
          
  onChange_enable = (e) => {
    this.state.group.forEach(element => {
    console.log(element, this.state.select_checked, this.state.select_checked.includes(element["id"].toString()));
      if (this.state.select_checked.includes(element["id"].toString())) {
       element["status_group"] = " فعال"}
       this.setState({ group: this.state.group })
              });
            }
      
    handleChange = selectOption => {
     this.setState({ selectOption });
      console.log(`Option selected:`, selectOption);
            };
     

      edit_transfer = () => {
        this.state.group.forEach(element => {
          console.log(element["id"].toString(),this.state.select_checked, this.state.select_checked.includes(element["id"].toString()) )
          if (this.state.select_checked.includes(element["id"].toString())) {
           window.location.href="http://localhost:3000/editGroup"+"?id="+ element['id']
           }
      });



    }
    
           
    
    render(){
      return(
        <div>
          <h2>        *****************************************  مدیریت  گروه ها   ***********************************************</h2>
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

               {this.state.group.map(q => ( 
                <tbody>
                  <tr ref={this.tr_ref}>
                   <td colspan="2">   {q['id']} </td>
                   <td colspan="2">   {q['group_name']} </td>
                   <td colspan="2">  {q["user_name"]}   </td>
                   <td colspan="2">  {q['data_create']} </td>
                   <td colspan="2" > {q['status_group']}    </td>
                   <td className="check_box" colspan="2">  <input
                    type="checkbox" ref={this.check_ref}
                    data_value={q["id"]}
                    onChange={this.onClick}
                    id='checkbox'
                  />                 
                   </td>
                 </tr>
              </tbody>
            ))}
          </table>

            <input type="button" value='ایجاد گروه' className="groupbtn" onClick={this.showTableGroup}/>
            <input className="Active_site" type='button' value='فعال کردن' onClick={this.onChange_enable} />
            <input className="dActive_site" type='button' value='غیر فعال کردن' onClick={this.onChange_disable} />
            <input className="dActive_site" type="button"  onClick={this.edit_transfer} value='ویرایش گروه ' />
              <div className="panel" ref={this.panel_ref} style={{display:this.state.display_panel}}>
               <input type='text' name='id'  className="" ref={this.id_ref} placeholder="id " required/>
               <input type='text' name='group_name' className="" ref={this.group_ref} placeholder="نام گروه" required/>
               <Select 
                onChange={this.handleChange}
                value={this.state.selectOption}
                ref={this.username_ref} 
                isMulti 
                options={this.state.users}>
               </Select>
              <input type='text' name='data_create'  className="" ref={this.data_ref} placeholder="تاریخ ایجاد "/>
              <input type='text' name='status_group'  className="" ref={this.status_ref} placeholder="وضعیت"/>
              <input type='button' value='تایید' className="btnoky" onClick={this.createGroup} />
             </div>

          </div>
      </div> 
        )
        
    }
}

 function  mapDispatchToProps (state) {
   return{data_edit:state.data_edit}
         }

  


export default connect(mapDispatchToProps)(Group);

    
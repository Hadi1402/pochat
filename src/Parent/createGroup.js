   
import React,{ Component } from "react";
import ReactDOM from 'react-dom';
import  "../static/css/chat.css";
import group_data from "./group_data";
import { createRef } from "react";
import { Avatar, easing } from "@material-ui/core";
import Select from 'react-select';
import user_data from "./user_data";
//import editGroup from "./editGroup"
//import { NavLink, navigate } from "react-router-dom";
//import { connect } from "react-redux";
import axios from "axios"


class CreateGroup extends React.Component{
    constructor(props) {
      super(props) 
        this.state = {
        group:[],
      //  select_checked: [],
      //  values: [''],
      //  users:user_options,
      //  selectOption:'',
      //  display_create:'none'
       }

    this.id_ref = createRef();    
    this.group_ref = createRef();
    this.username_ref = createRef();
    this.data_ref = createRef();
    this.status_ref = createRef();
    this.check_ref = createRef();
//**********************************************************/

    this.handleChange = this.handleChange.bind(this)
    this.create = this.create.bind(this)
    }


    create= (event) => {
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
     /* axios.post('http://localhost/data/group_data.json',{
       "id":this.id_ref.current.value,
       "group_name":this.group_ref.current.value,
       "data_create":this.data_ref.current.value,
       "status_group":this.status_ref.current.value,
       "user_name":this.username_ref.current.value,
        }).then(res =>{console.log(res.data)})*/
      } 
 
    render(){
  
      return(
        <div>
          <h2>        *****************************************  اضافه کردن  گروه ها   ***********************************************</h2>
            <hr/>
            <div className="div_user">           
             <div style={{display:this.state.display_create}}>
                 <input type='text' name='id' className="" ref={this.id_ref} placeholder="id " required/>
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
                 <input type='button' value='تایید' className="btnoky" onClick={this.create} />
                </div>
                <input type='button' value='انصراف' className="btnoky" onClick={''} />
              </div> 
          </div>
        )
        
    }
}




export default CreateGroup;

    
   
   
   
   
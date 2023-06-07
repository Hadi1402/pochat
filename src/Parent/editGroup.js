import React,{useState,useEffect} from "react";
import { useActionData } from "react-router";
import { Connect, connect } from "react-redux";
import Select from 'react-select';
import group_data from "./group_data";
import editGroup from "../Actions/editGroupTable";


/* 
   
    
     console.log("here1111111111111111111111111"); */

class EditGroup extends React.Component{
    constructor(props) {
      super(props)
        this.state = {
      group:group_data,
       select_checked: [],
      //  values: [''],
     //   users:user_options,
       // selectOption:''
         }  
               

    this.id_ref = React.createRef();    
    this.group_ref = React.createRef();
    this.username_ref = React.createRef();
    this.data_ref = React.createRef();
    this.status_ref = React.createRef();
}

 Edit=(event) =>{
  event.preventDefault(); 

  const id = this.id_ref.value;
  const group_name = this.group_ref.value;
  const user_name = this.username_ref.value;
  const data_create = this.data_ref.value;
  const status_group = this.status_ref.value;

 

this.props.dispatch(editGroup(id,group_name,user_name,data_create,status_group)); 
console.log('111111111111111111111111111111111')
console.log(id,group_name,user_name,data_create,status_group)
 }

 


      
           
    render(){
       return(
            <div>
            <h2>        ***********************************************  ویرایش  گروه ها ***********************************************</h2>
            <hr/>
            <div>

      
           
            <div className="panel">
              
            <input type='text' name='id'  className="" ref={this.id_ref} placeholder="id " required/>
            <br/>
            <input type='text' name='group_name' className="" ref={this.group_ref} placeholder="نام گروه" required/>
            <br/>
            <br/>

          <Select>
        
          
          </Select>

        
          <br/>
             <input type='text' name='data_create'  className="" ref={this.data_ref} placeholder="تاریخ ایجاد "/>
             <br/>

             <input type='text' name='status_group'  className="" ref={this.status_ref} placeholder="وضعیت"/>
             <br/>

             <input type='button' value='تایید' className="btnoky" onClick={this.Edit} />
             <input type='button' value='بستن' className="btncancel" onClick={this.Cancel} />

             </div>

             </div>
        
          

             </div> 
      )
       } 
        
      }



function mapStateToProps(state) {
  return{data_edit:state.data_edit}
          }


export default  connect(mapStateToProps)(EditGroup);
  
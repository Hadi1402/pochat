import React,{useState,useEffect} from "react";
import { useActionData } from "react-router";
import { connect } from "react-redux";
import Select from 'react-select';
import editGroup from "../Actions/editGroupTable";
import group_data from "./group_data";


/* 
   
    
     console.log("here1111111111111111111111111"); */

class EditGroup extends React.Component{
    constructor(props) {
      super(props)
        this.state = {
          group:group_data,
          //  values: [''],
     //   users:user_options,
       // selectOption:''
         }  
               

    this.id_ref = React.createRef();    
    this.group_ref = React.createRef();
    this.username_ref = React.createRef();
    this.data_ref = React.createRef();
    this.status_ref = React.createRef();
    this.saveEdit = this.saveEdit.bind(this)
}


  saveEdit = (e) =>{
      this.state.group.forEach(element => {
       element['id'] = this.id_ref.current.value
       element['group_name'] = this.group_ref.current.value
        element["status_group"] = this.status_ref.current.value
     this.setState({ group: this.state.group }) });
     console.log({group:this.state.group})

     window.location.href="http://localhost:3000/group"

        }  

 
    

      
           
    render(){
       return(
            <div>
            <h2>        ***********************************************  ویرایش  گروه ها ***********************************************</h2>
            <hr/>
            <div>

      
           
            <div className="panel">
              
            <input type='text' name='id' value={this.props.data_edit.id}  ref={this.id_ref}placeholder="id" required/>
            <br/>
            <input type='text' name='group_name' value={this.props.data_edit.group_name}  ref={this.group_ref}placeholder="نام گروه" required/>
            <br/>
            <br/>

          <Select>
        
          
          </Select>

        
          <br/>
             <input type='text' name='data_create'  value={''}ref={this.data_ref} placeholder="تاریخ ایجاد "/>
             <br/>

             <input type='text' name='status_group'   value={this.props.data_edit.status_group} ref={this.status_ref} placeholder="وضعیت"/>
             <br/>

             <input type='button' value='تایید' className="btnoky" onClick={this.saveEdit} />
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
  
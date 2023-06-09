import React,{useState,useEffect} from "react";
import { useActionData } from "react-router";
import { connect } from "react-redux";
import Select from 'react-select';
import editGroup from "../Actions/editGroupTable";


/* 
   
    
     console.log("here1111111111111111111111111"); */

class EditGroup extends React.Component{
    constructor(props) {
      super(props)
        this.state = {
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

 


 }

 
    

      
           
    render(){
       return(
            <div>
            <h2>        ***********************************************  ویرایش  گروه ها ***********************************************</h2>
            <hr/>
            <div>

      
           
            <div className="panel">
              
            <input type='text' name='id' value={this.props.data_edit.id} placeholder="id" required/>
            <br/>
            <input type='text' name='group_name' value={this.props.data_edit.group_name} placeholder="نام گروه" required/>
            <br/>
            <br/>

          <Select>
        
          
          </Select>

        
          <br/>
             <input type='text' name='data_create'  value={''}ref={this.data_ref} placeholder="تاریخ ایجاد "/>
             <br/>

             <input type='text' name='status_group'   value={this.props.data_edit.status_group} ref={this.status_ref} placeholder="وضعیت"/>
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
  
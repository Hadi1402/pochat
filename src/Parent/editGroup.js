import React,{useState,useEffect} from "react";
import { useActionData } from "react-router";
import Select from 'react-select';




class EditGroup extends React.Component{
    constructor(props) {
      super(props) 
        this.state = {
      //  group:group_data,
    //    select_checked: [],
      //  values: [''],
     //   users:user_options,
       // selectOption:''
         }  
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
            <input type='text' name='group_name'  className="" ref={this.group_ref} placeholder="نام گروه" required/>
            <br/>
            <br/>

          <Select>
        
          
          </Select>

        
          <br/>
             <input type='text' name='data_create'  className="" ref={this.data_ref} placeholder="تاریخ ایجاد "/>
             <br/>

             <input type='text' name='status_group'  className="" ref={this.status_ref} placeholder="وضعیت"/>
             <br/>

             <input type='button' value='تایید' className="btnoky" onClick={''} />
             <input type='button' value='بستن' className="btncancel" onClick={this.Cancel} />

             </div>

             </div>
        
          

             </div> 
      )
       } 
        
      }



    
/*
  editGroup =(e) =>{
    const { name, value } = e.target
    console.log('name', name)
    console.log('value', value)
    this.state.group.map((item) =>
    item.id === id && name ?{ ...item, [name]: value}: item
    this.setState({ group: this.state.group })
       )}
     */
             
  
          
  export default EditGroup;
  
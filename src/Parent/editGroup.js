import React,{useState} from "react";
import Select from 'react-select';
import {NavLink} from "react-router-dom";








class editGroup extends React.Component{
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
            <div className="div_user">

      
                         
            <input type="button" value='ایجاد گروه' className="groupbtn" onClick={this.showTableGroup}/>
            <input className="Active_site" type='button' value='فعال کردن' onClick={this.onChange_enable} />
            <input className="dActive_site" type='button' value='غیر فعال کردن' onClick={this.onChange_disable} />

            <div className="panel" ref={this.panel_ref} style={{display:this.state.display_panel}}>
            <input type='text' name='id'  className="" ref={this.id_ref} placeholder="id " required/>
            <input type='text' name='group_name'  className="" ref={this.group_ref} placeholder="نام گروه" required/>
            
          <Select>
        
          
          </Select>

        
            
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


export default editGroup;


    
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
             
        
            
    
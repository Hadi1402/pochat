import React, { createRef } from "react";
import website_data from "./website_data";
import "../static/css/chat.css"



class WebSite extends React.Component{
    constructor(props) {
        super(props)   
        this.state = {
            data:website_data,
            display_panel:"none",
            display_list:"block",
            select_checked: [],
                     }
    this.company_ref = createRef();
    this.domain_ref = createRef();
    this.type_ref = createRef();
    this.data_ref = createRef();
    this.status_ref = createRef();
    this.panel_ref = createRef();
   
     this.onChange_disable = this.onChange_disable.bind(this)
     this.displayPanel = this.displayPanel.bind(this)
     this.Cancel = this.Cancel.bind(this)
     this.addInputSite = this.addInputSite.bind(this)
     this.onChange_enable = this.onChange_enable.bind(this)
     this.onChange_delete = this.onChange_delete.bind(this) 
     this.onClick = this.onClick.bind(this)


      }

      onClick = (event) => {
        this.state.select_checked.push(event.target.getAttribute("data_value"))
        this.setState({ select_checked: this.state.select_checked });
        console.log(this.state.select_checked)
               }
   
      displayPanel = e =>{
        this.state.display_panel="block"
        this.state.display_list="none"
        this.setState({style:this.state.display_panel})
      }
    
    Cancel = e =>{
        this.state.display_panel="none"
        this.setState({style:this.state.display_panel})
    }

   /* ref={this.domain_ref} placeholder="نام سایت" required/>
    <br/>
    <input type='text' name='domain_name'  className="input_type" ref={this.type_ref} placeholder="نوع سایت " required/>
    <br/>    
 <input type='text' name='company_name'  className="input_company_name" ref={this.company_ref} placeholder="نام شرکت"/>
 <br/>
 <input type='text' name='data_create'  className="input_data_create" ref={this.data_ref} placeholder="تاریخ ایجاد "/>
 <br/>
 <input type='text' name='status'  className="input_status" ref={this.status_ref}*/

       addInputSite = e => {
        var data_new = [
          this.domain_ref.current.value,
          this.type_ref.current.value,
          this.company_ref.current.value,
          this.data_ref.current.value,
          this.status_ref.current.value]
           website_data.push(data_new)
           console.log( website_data)
           console.log(this.state.data)
      
          const new_domain = document.createElement("tr")
          const new_type = document.createElement("tr")
          const new_company = document.createElement("tr")
          const new_data = document.createElement("tr")
          const new_status = document.createElement("tr")
          const new_check = document.createElement('tr')
          const new_checkbox = document.createElement('input')
          new_checkbox.type="checkbox";
          console.log(new_checkbox.type)
    
          document.getElementById('td_domain').append(new_domain)
          document.getElementById('td_type').append(new_type)
          document.getElementById('td_company').append(new_type)
          document.getElementById('td_data').append(new_data)
          document.getElementById('td_status').append(new_status)
  
          new_domain.innerHTML = data_new[0]
          new_type.innerHTML = data_new[1]
          new_data.innerHTML = data_new[2]
          new_status.innerHTML = data_new[3]
          new_check.innerHTML = new_checkbox;
          console.log(new_check)
          this.state.display_list = "block"
          this.setState({style:this.state.display_list})


        /*
        this.state.data.forEach(element => {
            element["domain_name"]=this.domain_ref.current.value;
            console.log("domain name is:" ,element["domain_name"])
            element["type"]=this.type_ref.current.value;
            console.log("type:" ,element["type"])
            element["company_name"]=this.company_ref.current.value;
            console.log('company name is:',element["company_name"])
            element["data_create"]=this.data_ref.current.value;
            console.log("data create is:", element["data_create"])
            element["status"]=this.status_ref.current.value;
            console.log("status is:" ,  element["status"])
            this.state.display_list = "block"
            this.setState({style:this.state.display_list})*//////


        }
   
    onChange_disable = (e) => {
        this.state.data.forEach(element => {
        console.log(element, this.state.select_checked, this.state.select_checked.includes(element["id"].toString()));
        if (this.state.select_checked.includes(element["id"].toString())){
            element["status"] = "غیر فعال" }
            });
        this.setState({ data: this.state.data })
               }
    
    
      onChange_enable = (e) => {
        this.state.data.forEach(element => {
        console.log(element, this.state.select_checked, this.state.select_checked.includes(element["id"].toString()));
        if (this.state.select_checked.includes(element["id"].toString())) {
            element["status"] = " فعال"}
          this.setState({ data: this.state.data })
        });
      }
    
   




   onChange_delete = (e) => {
    this.state.data.forEach(element => {
    if (this.state.select_checked.includes(element["id"].toString())) {
        //this.state.row_display = "none"
        element["display"] = "none";
        // call backend
      }
    });
    this.setState({ data: this.state.data })
  }
  
  
    render(){
        return(
   
            <div>
           <h2>        ***********************************************        مدیریت  سایت         ***********************************************</h2>
           <hr/>
           <div className="div_site" style={{display:this.state.display_list}}>
           <table className="user_table">
            <thead>
              <tr>
                <th className="td_user_table" colspan="2"> ID </th>
                <th className="td_user_table" colspan="2"> نام دامنه </th>
                <th className="td_user_table" colspan="2"> نوع سایت  </th>
                <th className="td_user_table" colspan="2">  اسم شرکت </th>
                <th className="td_user_table" colspan="2">  تاریخ ایجاد </th>
                <th className="td_user_table" colspan="2">  وضعیت  </th>
                <th className="td_user_table" colspan="2">  انتخاب</th>
              </tr>
            </thead>

            {this.state.data.map(u =>(
             <tbody>  
               <tr style={ {display:u["display"]} }>
               <td colspan="2">  {u["id"]} </td>
               <td colspan="2" id='td_domain'>  {u["domain_name"]}    </td>
               <td colspan="2" id='td_type'>  {u["type"]}    </td>
               <td colspan="2" id="td_company">  {u['company_name']}   </td>
               <td colspan="2" id="td_data">  {u["data_create"]}    </td>
               <td colspan="2" id='td_status'>  {u["status"]}         </td>
                  <td className="check_box" colspan="2">  <input
                    type="checkbox"
                    data_value={u["id"]}
                    onChange={this.onClick}
                  /></td>
                </tr>
                </tbody>
                  ))}

            </table>
            </div>
 
              <input className="Add_site" type='button' value='افزودن سایت' onClick={this.displayPanel} />
              <input className="Active_site" type='button' value='فعال کردن' onClick={this.onChange_enable} />

              <input className="del_site" type='button' value='حذف سایت' onClick={this.onChange_delete} />


              <div className="panel" ref={this.panel_ref} style={{display:this.state.display_panel}}>
            <input type='text' name='domain_name'  className="input_domain" ref={this.domain_ref} placeholder="نام سایت" required/>
                <br/>
                <input type='text' name='domain_name'  className="input_type" ref={this.type_ref} placeholder="نوع سایت " required/>
                <br/>    
             <input type='text' name='company_name'  className="input_company_name" ref={this.company_ref} placeholder="نام شرکت"/>
             <br/>
             <input type='text' name='data_create'  className="input_data_create" ref={this.data_ref} placeholder="تاریخ ایجاد "/>
             <br/>
             <input type='text' name='status'  className="input_status" ref={this.status_ref} placeholder="وضعیت"/>
             <br/>
             <input type='button' value='تایید' className="btnoky" onClick={this.addInputSite} />
             <input type='button' value='بستن' className="btncancel" onClick={this.Cancel} />

             </div>
            </div>

        ) 

    }
}

export default WebSite;


/** <input type='text' name='domain_name' site_value={u["domain_name"]} className="input_domain" ref={this.domain_ref} placeholder="نام سایت" required/>
                <br/>
                <input type='text' name='company_name' company_value={u["company_name"]} className="input_company_name"  ref={this.company_ref} placeholder="نام شرکت"/>
                 <br/>
                 <br/> */
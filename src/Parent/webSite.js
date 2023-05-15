import React, { createRef, useState } from "react";
import website_data from "./website_data";
import "../static/css/chat.css"


class WebSite extends React.Component{
    constructor(props) {
        super(props)   
        this.state = {
            data:website_data,
                     }
    this.company_ref = createRef()
    this.domain_ref = createRef()
   
    // this.onChange_disable = this.onChange_disable.bind(this)
       this.addInputSite = this.addInputSite.bind(this)
      //  this.onChange_enable = this.onChange_enable.bind(this)
       // this.onChange_delete = this.onChange_delete.bind(this) 
      }

       
        
       addInputSite = event => {
        this.state.data.forEach(element => {
            element["domain_name"]=this.domain_ref.current.value;
            console.log("domain name is:" ,element["domain_name"])
            element["company_name"]=this.company_ref.current.value;
            console.log('company name is:',element["company_name"])

        });
    }
/*
    
      onChange_disable = (e) => {
  
               }
    
    
      onChange_enable = (e) => {
    
      }
    

      onChange_delete = (e) => {
      
      } *////


    render(){
        return(
   
            <div>
           <h1>******************************************************************** مدیریت  سایت *********************************************************</h1>
           <hr/>
            {this.state.data.map(u =>(
            <div className="website">
                <input type='text' name='domain_name' site_value={u["domain_name"]} className="input_domain" ref={this.domain_ref} placeholder="نام سایت" required/>
                <br/>
                <input type='text' name='company_name' company_value={u["company_name"]} className="input_company_name"  ref={this.company_ref} placeholder="نام شرکت"/>
                 <br/>
                 <br/>
                 <input className="Add_site" type='button' value='افزودن سایت' onClick={this.addInputSite} />
                 <input className="Active_site" type='button' value='فعال کردن' onClick={this.onChange_enable} />
                 <input className="dActive_site" type='button' value='غیر فعال کردن' onClick={this.onChange_disable} />
                 <input className="del_site" type='button' value='حذف سایت' onClick={this.onChange_delete} />

            </div>
            ))}


            </div>

        ) 

    }
}

export default WebSite;

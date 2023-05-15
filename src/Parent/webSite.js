import React, { useState } from "react";
import website_data from "./website_data";
import "../static/css/chat.css"


class WebSite extends React.Component{
    constructor(props) {
        super(props)   
        this.state = {
            data:website_data,
            domain_name:'',
            company_name:'',
                     }
   
       // this.onChange_disable = this.onChange_disable.bind(this)
       // this.onClick = this.onClick.bind(this)
       this.addInputSite = this.addInputSite.bind(this)
      this.handleInputDomain = this.handleInputDomain.bind(this)
      this.handleInputCompany = this.handleInputCompany.bind(this)

      //  this.onChange_enable = this.onChange_enable.bind(this)
       // this.onChange_delete = this.onChange_delete.bind(this) 
             }

       handleInputDomain = event => {
        this.state.domain_name=event.target.value
        this.setState({domain_name:this.state.domain_name});
        console.log(this.state.domain_name)
       };
        

       handleInputCompany = event => {
       this.state.company_name = event.target.value
       this.setState({company_name:this.state.company_name})
       console.log(this.state.company_name)
            };
        
       addInputSite = event => {
        this.state.data.forEach(element => {
            element["domain_name"]=this.state.domain_name;
            console.log("domain name is:" ,element["domain_name"])
            element["company_name"]=this.state.company_name;
            console.log('company name is:',element["company_name"])

        });
    }
       /* this.state.data.domain_name =this.state.domain_name
         this.state.data.company_name=this.state.company_name
         console.log("domain name is:" ,this.state.data.domain_name)
         console.log('company name is:' ,this.state.data.company_name)
        
   
    }
/*
      onClick = (event) => {
     
               }
    
    
      onChange_disable = (e) => {
  
               }
    
    
      onChange_enable = (e) => {
    
      }
    

      onChange_delete = (e) => {
      
      } *////


    render(){
        return(

            <div>

            {this.state.data.map(u =>(
            <div className="website">
                <input type='text' name='domain_name' site_value={u["domain_name"]} className="input_domain" onChange={this.handleInputDomain} placeholder="نام سایت" required/>
                <br/>
                <input type='text' name='company_name' company_value={u["company_name"]} className="input_company_name"  onChange={this.handleInputCompany} placeholder="نام شرکت"/>
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

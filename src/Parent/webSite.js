import React from "react";
import website_data from "./website_data";
import "../static/css/chat.css"


class WebSite extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
                     }
        this.onChange_disable = this.onChange_disable.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onChange_enable = this.onChange_enable.bind(this)
        this.onChange_delete = this.onChange_delete.bind(this)
             }
    
      onClick = (event) => {
     
               }
    
    
      onChange_disable = (e) => {
  
               }
    
    
      onChange_enable = (e) => {
    
      }
    
    
      onChange_delete = (e) => {
      
      }
    render(){
        return(
            <div className="website">
                <input type='text' className="input_domain" placeholder="نام سایت" required/>
                <br/>
                <input type='text' className="input_company_name" placeholder="نام شرکت"/>
                 <br/>
                 <br/>
                 <input className="Add_site" type='button' value='افزودن سایت' onClick={this.onChange_enable} />
                 <input className="Active_site" type='button' value='فعال کردن' onClick={this.onChange_enable} />
                 <input className="dActive_site" type='button' value='غیر فعال کردن' onClick={this.onChange_disable} />
                 <input className="del_site" type='button' value='حذف سایت' onClick={this.onChange_delete} />

            </div>
        ) 
    }
}

export default WebSite;

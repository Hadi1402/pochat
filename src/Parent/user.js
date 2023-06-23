import React, { useState, useRef } from 'react';
import "../static/css/chat.css";
import { Avatar } from "@material-ui/core";
import { SearchOutlined, Style } from "@material-ui/icons";
import user_data from "./user_data";
import axios from 'axios';


class User extends React.Component {

  constructor(props) {
    super(props)
    this.status_Ref = React.createRef();
    this.check_Ref = React.createRef();
    this.state = {
      data:[],
      select_checked: [],
                 }
    this.onChange_disable = this.onChange_disable.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onChange_enable = this.onChange_enable.bind(this)
    this.onChange_delete = this.onChange_delete.bind(this)
         }

    componentDidMount = () =>{
     axios.get('http://localhost/data/user_data.js').then(res =>{
       console.log(res.data);
       this.setState({data:res.data})
       console.log(this.state.data)
                           });                 
            }     

  onClick = (event) => {
    this.state.select_checked.push(event.target.getAttribute("data_value"))
    this.setState({ select_checked: this.state.select_checked });
    console.log(this.state.select_checked)
           }


  onChange_disable = (e) => {
    this.state.data.forEach(element => {
    console.log(element, this.state.select_checked, this.state.select_checked.includes(element["id"].toString()));
     if (this.state.select_checked.includes(element["id"].toString())){
      element["status user"] = "غیر فعال" }
        });
    this.setState({ data: this.state.data })
           }


  onChange_enable = (e) => {
    this.state.data.forEach(element => {
    console.log(element, this.state.select_checked, this.state.select_checked.includes(element["id"].toString()));
     if (this.state.select_checked.includes(element["id"].toString())) {
      element["status user"] = " فعال"}
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


  render() {
    return (

      <div>
        <div className="div_user">
          <div className="search_user">
            <SearchOutlined />
            <input placeholder=" search ... " />
          </div>

          <table className="user_table">
            <thead>
              <tr>
                <th className="td_user_table" colspan="2"> ID </th>
                <th className="td_user_table" colspan="2"> نام کاربری </th>
                <th className="td_user_table" colspan="2">  ایمیل </th>
                <th className="td_user_table" colspan="2">  تاریخ ایجاد </th>
                <th className="td_user_table" colspan="2">  وضعیت کاربر </th>
                <th className="td_user_table" colspan="2">  زمینه فعالیت  </th>
                <th className="td_user_table" colspan="2">  انتخاب</th>
              </tr>
            </thead>
            
            {this.state.data.map(u => (
              <tbody>
                <tr className="info_table" style={ {display:u["display"]} }>
                  <td colspan="2">  {u["id"]} </td>
                  <td colspan="2"> <img className="img_user" src={u.img} /> <span> {u["user_name"]} </span> </td>
                  <td colspan="2"> {u["email"]} </td>
                  <td colspan="2">  {u["data create"]} </td>
                  <td ref={this.status_Ref} className="td_status" colspan="2"> {u["status user"]}  </td>
                  <td colspan="2">  {u["field"]} </td>
                  <td className="check_box" colspan="2">  <input
                    type="checkbox"
                    data_value={u["id"]}
                    onChange={this.onClick}
                  />
                  </td>
                </tr>
              </tbody>

            ))}
          </table>

        </div>
        <br></br>
        <input className="Active_user" type='button' value='فعال کردن' onClick={this.onChange_enable} />
        <input className="dActive_user" type='button' value='غیر فعال کردن' onClick={this.onChange_disable} />
        <input className="del_user" type='button' value='حذف کاربر' onClick={this.onChange_delete} />

      </div>




    )
  }
}


export default User;   
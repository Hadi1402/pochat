
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "../static/css/chat.css";
import { createRef } from "react";
import { Avatar, easing } from "@material-ui/core";
import Select from 'react-select';
import user_data from "./user_data";
//import editGroup from "./editGroup"
//import { NavLink, navigate } from "react-router-dom";
//import { connect } from "react-redux";
import axios from "axios"


class CreateGroup extends React.Component {
  constructor(props) {
    super(props)
    var user_options = []
    for (let i = 0; i < user_data.length; i++) {
      user_options.push(
        { value: user_data[i].id, label: user_data[i].user_name }
      )
    }

    this.state = {
      group: [],
      select_checked: [],
      users: user_options,
      selectOption: '',
    }
    this.id_ref = createRef();
    this.group_ref = createRef();
    this.username_ref = createRef();
    this.data_ref = createRef();
    this.status_ref = createRef();
    this.check_ref = createRef();
    //**********************************************************/
    this.Gogroup = this.Gogroup.bind(this);
    this.create = this.create.bind(this);
  }


  componentDidMount = () => {
    axios.get('http://localhost/data/group_data.json').then(res => {
      console.log(res.data)
      this.setState({ group: res.data })
      console.log(this.state.group)
    });
  }

  handleChange = selectOption => {
    this.setState({ selectOption });
    console.log(`Option selected:`, selectOption);
  };

  create = (event) => {
    this.state.group.forEach(element => {
      element['id'] = this.id_ref.current.value;
      element["group_name"] = this.group_ref.current.value;
      //  for(let j=0 ; j<this.state.selectOption.length; j++){}
      element["user_name"] = this.state.selectOption
      console.log(this.state.selectOption)
      console.log('selecttt uaers:', element["user_name"])
      element["data_create"] = this.data_ref.current.value;
      element["status_group"] = this.status_ref.current.value;
      console.log({ group: this.state.group })
    })
    this.setState({ group: this.state.group })
    console.log(this.state.group)
    axios.post('http://localhost/data/group_data.json', {
      "id": this.id_ref.current.value,
      "group_name": this.group_ref.current.value,
      "data_create": this.data_ref.current.value,
      "status_group": this.status_ref.current.value,
      "user_name": this.username_ref.current.value,
    }).then(res => { console.log(res.data) })
      .catch(function (error) {
        console.log(error)
      })
  }

  Gogroup = () => {
    window.location.href = "http://localhost:3000/Group"
  }

  render() {

    return (
      <div>
        <h2>        *****************************************  اضافه کردن  گروه ها   ***********************************************</h2>
        <hr />
        <div className="div_user">
          <div>
            <input type='text' name='id' className="" ref={this.id_ref} placeholder="id " required />
            <input type='text' name='group_name' className="" ref={this.group_ref} placeholder="نام گروه" required />

            <Select
              onChange={this.handleChange}
              value={this.state.selectOption}
              ref={this.username_ref}
              isMulti
              options={this.state.users}>
            </Select>

            <input type='text' name='data_create' className="" ref={this.data_ref} placeholder="تاریخ ایجاد " />
            <input type='text' name='status_group' className="" ref={this.status_ref} placeholder="وضعیت" />
            <input type='button' value='تایید' className="btnoky" onClick={this.create} />
            <input type='button' value=' برگشت /انصراف' className="btnoky" onClick={this.Gogroup} />

          </div>
        </div>
      </div>
    )

  }
}




export default CreateGroup;






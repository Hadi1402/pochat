import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "../static/css/group.css";
import { createRef } from "react";
import { Avatar, easing } from "@material-ui/core";
import Select from 'react-select';
import { NavLink, navigate } from "react-router-dom";
import editGroup from "../Actions/editGroupTable";
import { connect } from "react-redux";
import axios from "axios";

import group_data from "./group_data.json"; 
import user_data from "./user_data";

class Group extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      group: group_data,
      select_checked: [],
      values: [''],
      display_create: 'none',
      selectOption: null,
      users: [
        { value: 'user1', label: 'User 1' },
        { value: 'user2', label: 'User 2' },
        { value: 'user3', label: 'User 3' },
        // Add more users here
      ],
    };

    this.id_ref = createRef();
    this.group_ref = createRef();
    this.username_ref = createRef();
    this.data_ref = createRef();
    this.status_ref = createRef();
    this.check_ref = createRef();

    this.create_transfer = this.create_transfer.bind(this);
    this.onChange_enable = this.onChange_enable.bind(this);
    this.onChange_disable = this.onChange_disable.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.edit_transfer = this.edit_transfer.bind(this);
  }

  componentDidMount = () => {
    axios.get('http://localhost/data/group_data.json').then(res => {
      console.log(res.data)
      this.setState({ group: res.data })
      console.log(this.state.group)
    });
  }

  onClick = (event) => {
    this.state.select_checked.push(event.target.getAttribute("data_value"))
    this.setState({ select_checked: this.state.select_checked });
    console.log(this.state.select_checked)
  }

  onChange_disable = (e) => {
    this.state.group.forEach(element => {
      console.log(element, this.state.select_checked, this.state.select_checked.includes(element["id"].toString()));
      if (this.state.select_checked.includes(element["id"].toString())) {
        element["status_group"] = "غیر فعال"
      }
    });
    this.setState({ group: this.state.group })
  }

  onChange_enable = (e) => {
    this.state.group.forEach(element => {
      console.log(element, this.state.select_checked, this.state.select_checked.includes(element["id"].toString()));
      if (this.state.select_checked.includes(element["id"].toString())) {
        element["status_group"] = " فعال"
      }
      this.setState({ group: this.state.group })
    });
  }

  handleChange = (selectOption) => {
    this.setState({ selectOption });
    console.log(`Option selected:`, selectOption);
  };

  edit_transfer = () => {
    this.state.group.forEach(element => {
      console.log(element["id"].toString(), this.state.select_checked, this.state.select_checked.includes(element["id"].toString()))
      if (this.state.select_checked.includes(element["id"].toString())) {
        window.location.href = "http://localhost:3000/editGroup" + "?id=" + element['id']
      }
    });
  }

  create_transfer = () => {
    window.location.href = "http://localhost:3000/createGroup"
  }

  render() {
    return (
      <div className="group">
        <div id="title">
          <h2>مدیریت گروه‌ها</h2>
        </div>

        <table className="group_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>نام گروه</th>
              <th>کاربران</th>
              <th>تاریخ ایجاد</th>
              <th>وضعیت</th>
              <th>انتخاب</th>
            </tr>
          </thead>

          <tbody className="group_list">
            {this.state.group.map(q => (
              <tr key={q.id} ref={this.tr_ref}>
                <td>{q['id']}</td>
                <td>{q['group_name']}</td>
                <td>{q["user_name"]}</td>
                <td>{q['data_create']}</td>
                <td>{q['status_group']}</td>
                <td className="check_box">
                  <input
                    type="checkbox"
                    ref={this.check_ref}
                    data_value={q["id"]}
                    onChange={this.onClick}
                    id='checkbox'
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="group_buttons">
          <button onClick={this.create_transfer}>ایجاد گروه</button>
          <button className="active_button" onClick={this.onChange_enable}>فعال کردن</button>
          <button className="inactive_button" onClick={this.onChange_disable}>غیر فعال کردن</button>
          <button className="edit_button" onClick={this.edit_transfer}>ویرایش گروه</button>
        </div>

        <div className="create_group_form" style={{ display: this.state.display_create }}>
          <h3>ایجاد گروه جدید</h3>
          <form>
            <div className="form_group">
              <label htmlFor="id">ID</label>
              <input type='text' name='id' id="id" className="" ref={this.id_ref} placeholder="id" required />
            </div>
            <div className="form_group">
              <label htmlFor="group_name">نام گروه</label>
              <input type='text' name='group_name' id="group_name" className="" ref={this.group_ref} placeholder="نام گروه" required />
            </div>
            <div className="form_group">
              <label htmlFor="users">کاربران</label>
              <Select
                onChange={this.handleChange}
                value={this.state.selectOption}
                ref={this.username_ref}
                isMulti
                options={this.state.users}
              />
            </div>
            <div className="form_group">
              <label htmlFor="data_create">تاریخ ایجاد</label>
              <input type='text' name='data_create' id="data_create" className="" ref={this.data_ref} placeholder="تاریخ ایجاد" />
            </div>
            <button type="submit" className="create_button">ایجاد گروه</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Group;
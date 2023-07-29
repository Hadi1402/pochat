import React, { Component } from "react";
import { createRef } from "react";
import Select from 'react-select';
import axios from "axios";
import "../static/css/createGroup.css";
import user_data from "./user_data";
import AddUserList from "./AddUserToGroupList";
import { Construction } from "@mui/icons-material";

class CreateGroup extends Component {
  
  constructor(props) {
    super(props);
  
    this.idRef = React.createRef();
    this.groupRef = React.createRef();
    this.selectOptionRef = React.createRef();
    this.usernameRef = React.createRef();
    this.dateRef = React.createRef();
    this.statusRef = React.createRef();

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      group: [],
      users: [],
      selectOption: "",
      username: "",
      date: "",
      status: ""
    };
  }

  componentDidMount() {
    const button = document.querySelector('#create_group_select_users');
    button.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    const button = document.querySelector('#create_group_select_users');
    button.removeEventListener('click', this.handleClick);
  }

  handleClick = () => {
    const list = document.querySelector('#add_user_list');
  
    if (list !== null) {
      list.style.position = 'fixed';
    }
  }

  render() {
    const { group, selectOption } = this.state;

    return (
      <div className="App">
        <header id="create_group_header">
          {/* add header content here */}
        </header>
        <tbody className="create_group_tbody">

          <div id="create_group_form">
            <input type="text" placeholder="نام گروه را وارد کنید" id="create-group-entername"></input>
            <button id="create_group_select_users" onClick={this.handleClick}>انتخاب کاربر ها</button>
            <button onClick={this.create}>ساخت گروه</button>
          </div>

          <AddUserList id="add_user_list"/>
        </tbody>
      </div>
    );
  }
}

export default CreateGroup;
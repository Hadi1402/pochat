import React, { Component } from "react";
import { createRef } from "react";
import Select from 'react-select';
import axios from "axios";
import "../static/css/createGroup.css";
import user_data from "./user_data";
import AddUserList from "./AddUserToGroupList";

class CreateGroup extends Component {
  constructor(props) {
    super(props);
    
    // create options for the react-select component
    const userOptions = user_data.map(user => ({
      value: user.id,
      label: user.user_name,
    }));

    this.state = {
      group: [],
      users: userOptions,
      selectOption: '',
    };

    // create refs for the input elements
    this.idRef = createRef();
    this.groupRef = createRef();
    this.usernameRef = createRef();
    this.dateRef = createRef();
    this.statusRef = createRef();
  }

  componentDidMount() {
    axios.get('http://localhost/data/group_data.json').then(res => {
      console.log(res.data);
      this.setState({ group: res.data });
      console.log(this.state.group);
    });
  }

  handleChange = selectOption => {
    this.setState({ selectOption });
    console.log("Option selected:", selectOption);
  };

  create = () => {
    const newGroup = {
      id: this.idRef.current.value,
      group_name: this.groupRef.current.value,
      user_name: this.state.selectOption,
      data_create: this.dateRef.current.value,
      status_group: this.statusRef.current.value,
    };
    
    // add the new group to the state
    this.setState(prevState => ({ group: [...prevState.group, newGroup] }));

    // post the new group to the server
    axios
      .post('http://localhost/data/group_data.json', newGroup)
      .then(res => {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  goToGroup = () => {
    window.location.href = "http://localhost:300/Group";
  };

  render() {
    return (
      <div className="App">
        <header id="create_group_header">
          <div id="create_group_header_text">
            <h2>اضافه کردن گروه</h2>
          </div>
        </header>
        <tbody className="create_group_tbody">
          {/* <div>
            <input
              type="text"
              name="id"
              className=""
              ref={this.idRef}
              placeholder="id"
              required
            />
            <input
              type="text"
              name="group_name"
              className=""
              ref={this.groupRef}
              placeholder="نام گروه"
              required
            />
            <Select
              onChange={this.handleChange}
              value={this.state.selectOption}
              ref={this.usernameRef}
              isMulti
              options={this.state.users}
            />
            <input type="text" name="date_create" className="" ref={this.dateRef} placeholder="تاریخ ایجاد" />
            <input type="text" name="status_group" className="" ref={this.statusRef} placeholder="وضعیت" />
            <input type="button" value="تایید" className="btnoky" onClick={this.create} />
            <input type="button" value="برگشت / انصراف" className="btnoky" onClick={this.goToGroup} />
          </div> */}

          <div id="create_group_form">
            <input type="text" id="create_group_name"></input>
            <button id="create_group_select_users">users</button>
            <button id="create_group_create">ساخت گروه</button>
          </div>

          <AddUserList id="add_user_list"/>
        </tbody>
      </div>
    );
  }
}

export default CreateGroup;
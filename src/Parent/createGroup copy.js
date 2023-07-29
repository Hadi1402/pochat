import React, { useState, useRef, useEffect } from "react";
import { createRef } from "react";
import Select from 'react-select';
import axios from "axios";
import "../static/css/createGroup.css";
import user_data from "./user_data";
import AddUserList from "./AddUserToGroupList";

function CreateGroup() {
  const idRef = useRef(null);
  const groupRef = useRef(null);
  const selectOptionRef = useRef(null);
  const usernameRef = useRef(null);
  const dateRef = useRef(null);
  const statusRef = useRef(null);

  const [group, setGroup] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectOption, setSelectOption] = useState("");
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios.get("http://localhost/data/group_data.json")
      .then(res => {
        setGroup(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  if (!group.length) {
    return (
      <div className="container">
        <h2>افزودن گروه</h2>
        <div className="create_group_header">
          <div id="create_group_header_text">
            <h2>اضافه کردن گروه</h2>
          </div>
        </div>
        <tbody className="create_group_tbody">
          {/* <AddUserList id="add_user_list"/> */}
        </tbody>
      </div>
    );
  } else {
    const groupData = group[0];
    const id = groupData.id;
    const group_name = groupData.group_name;
    const dataCreate = groupData.data_create;
    const status = groupData.status;

    return (
      <div className="App">
        <header id="create_group_header">
        </header>
        <tbody className="create_group_tbody">
          {/* <div>
            <input
              type="text"
              name="id"
              className=""
              ref={idRef}
              placeholder="id"
              required
            />
            <input
              type="text"
              name="group_name"
              className=""
              ref={groupRef}
              placeholder="نام گروه"
              required
            />
            <Select
              onChange={handleChange}
              value={selectOption}
              ref={usernameRef}
              isMulti
              options={users}
            />
            <input type="text" name="date_create" className="" ref={dateRef} placeholder="تاریخ ایجاد" />
            <input type="text" name="status_group" className="" ref={statusRef} placeholder="وضعیت" />
            <input type="button" value="تایید" className="btnoky" onClick={create} />
            <input type="button" value="برگشت / انصراف" className="btnoky" onClick={goToGroup} />
          </div> */}

          <div id="create_group_form">
            <input type="text" id="create_group_name" placeholder="نام گروه را وارد کنید" ref={idRef} required></input>
            <button id="create_group_select_users">users</button>
            <button id="create_group_create">ساخت گروه</button>
          </div>


          {/* <AddUserList id="add_user_list"/> */}
        </tbody>
      </div>
    );
  }

  function handleChange(selectedOption) {
    setSelectOption(selectedOption);
  }

  function create() {
    // your create function logic here
  }

  function goToGroup() {
    // your go to group function logic here
  }
}

export default CreateGroup;
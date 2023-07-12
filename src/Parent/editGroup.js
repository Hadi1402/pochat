import React, { useState, useEffect } from "react";
import { useActionData } from "react-router";
import { connect } from "react-redux";
import Select from 'react-select';
import editGroup from "../Actions/editGroupTable";
import group_data from "./group_data";
import axios from "axios";


class EditGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      group: group_data,
      //  values: [''],
      //users:user_options,
      // selectOption:''
    }

    this.id_ref = React.createRef();
    this.group_ref = React.createRef();
    this.username_ref = React.createRef();
    this.data_ref = React.createRef();
    this.status_ref = React.createRef();
    //  this.saveEdit = this.saveEdit.bind(this)
  }


  saveEdit = (e) => {
    //this.state.group.forEach(element => {
    //  this.id_ref.current.value = groupProfile.getId()
    //   console.log(groupProfile.getId())
    //   element['group_name'] = this.group_ref.current.value
    //   element["status_group"] = this.status_ref.current.value
    // this.setState({ group: this.state.group }) });
    // console.log({group:this.state.group}) 
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

  render() {
    var params = new URL(window.location).searchParams
    console.log(params)
    var id_rec = params.get("id")
    console.log(id_rec)
    var id, group, date, status, user
    this.state.group.forEach(element => {
      console.log(id_rec, element["id"])
      if (id_rec == element['id']) {
        console.log()
        id = element['id']
        group = element['group_name']
        date = element['data_create']
        user = element['user_name']
        status = element['status_group']
      }
    });

    return (
      <div>
        <h2>        ***********************************************  ویرایش  گروه ها ***********************************************</h2>
        <hr />
        <div>
          <div className="panel">
            <input type='text' defaultValue={id} name='id' ref={this.id_ref} required />
            <br />
            <input type='text' name='group_name' defaultValue={group} ref={this.group_ref} required />
            <br />
            <br />
            <Select ref={this.username_ref} name='user_name'>
            </Select>
            <br />
            <input type='text' name='data_create' defaultValue={date} ref={this.data_ref} />
            <br />
            <input type='text' name='status_group' ref={this.status_ref} defaultValue={status} />
            <br />
            <input type='button' value='تایید' className="btnoky" onClick={this.saveEdit} />
            <input type='button' value='بستن' className="btncancel" onClick={this.Cancel} />
          </div>
        </div>
      </div>
    )
  }

}


// function mapStateToProps(state) {
//  console.log(state)
//  return{data_edit:state.data_edit}
//}


export default EditGroup;

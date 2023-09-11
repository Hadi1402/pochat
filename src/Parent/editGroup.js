import React from "react";
import Select from 'react-select';
import group_data from "./group_data";
import axios from "axios";


class EditGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      group: group_data,
    }

    this.id_ref = React.createRef();
    this.group_ref = React.createRef();
    this.username_ref = React.createRef();
    this.admin_ref = React.createRef();
    this.status_ref = React.createRef();
    //  this.saveEdit = this.saveEdit.bind(this)
  }


  saveEdit = (e) => {
    axios.post('http://localhost/data/group_data.json', {
      "id": this.id_ref.current.value,
      "group_name": this.group_ref.current.value,
      "group_admin": this.admin_ref.current.value,
      "status_group": this.status_ref.current.value,
      "users": this.username_ref.current.value,
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
        date = element['group_admin']
        user = element['users']
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
            <input type='text' name='group_admin' defaultValue={group} ref={this.group_ref} required />
            <br />
            <br />
            <Select ref={this.username_ref} name='users'>
            </Select>
            <br />
            <input type='text' name='admin' defaultValue={date} ref={this.admin_ref} />
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



export default EditGroup;

import React from "react";
import "../static/css/chat.css";
import { createRef } from "react";
import Select from 'react-select';
import axios from "axios"


class Group extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      group: [],
      select_checked: [],
      values: [''],
      display_create: 'none'
    }

    this.id_ref = createRef();
    this.group_ref = createRef();
    this.username_ref = createRef();
    this.data_ref = createRef();
    this.status_ref = createRef();
    this.check_ref = createRef();
    //**********************************************************/

    this.create_transfer = this.create_transfer.bind(this)
    this.onChange_enable = this.onChange_enable.bind(this)
    this.onChange_disable = this.onChange_disable.bind(this)
    this.onClick = this.onClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.edit_transfer = this.edit_transfer.bind(this)
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

  handleChange = selectOption => {
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
      <div>
        <h2>        *****************************************  مدیریت  گروه ها   ***********************************************</h2>
        <hr />
        <div className="div_user">
          <table className="user_table">
            <thead>
              <tr>
                <th className="td_user_table" colspan="2"> ID </th>
                <th className="td_user_table" colspan="2"> نام گروه </th>
                <th className="td_user_table" colspan="2"> کاربران  </th>
                <th className="td_user_table" colspan="2">  تاریخ ایجاد </th>
                <th className="td_user_table" colspan="2">  وضعیت  </th>
                <th className="td_user_table" colspan="2">  انتخاب</th>
              </tr>
            </thead>

            {this.state.group.map(q => (
              <tbody>
                <tr ref={this.tr_ref}>
                  <td colspan="2">   {q['id']} </td>
                  <td colspan="2">   {q['group_name']} </td>
                  <td colspan="2">  {q["user_name"]}   </td>
                  <td colspan="2">  {q['data_create']} </td>
                  <td colspan="2" > {q['status_group']}    </td>
                  <td className="check_box" colspan="2">  <input
                    type="checkbox" ref={this.check_ref}
                    data_value={q["id"]}
                    onChange={this.onClick}
                    id='checkbox'
                  />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>

          <input type="button" value='ایجاد گروه' className="groupbtn" onClick={this.create_transfer} />
          <input className="Active_site" type='button' value='فعال کردن' onClick={this.onChange_enable} />
          <input className="dActive_site" type='button' value='غیر فعال کردن' onClick={this.onChange_disable} />
          <input className="dActive_site" type="button" onClick={this.edit_transfer} value='ویرایش گروه ' />

          <div style={{ display: this.state.display_create }}>
            <div className="panel" ref={this.panel_ref} onClick={this.showTableGroup}>
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
              <input type='button' value='تایید' className="btnoky" onClick={this.createGroup} />
            </div>
            <input type='button' value='انصراف' className="btnoky" onClick={this.close} />

          </div>
        </div>
      </div>
    )



  }

}




export default Group;


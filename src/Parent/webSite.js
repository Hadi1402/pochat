import React, { createRef } from "react";
import website_data from "./website_data.json";
import "../static/css/website.css";
import axios from "axios";

class WebSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      display_panel: "none",
      display_list: "block",
      select_checked: [],
    };
    this.company_ref = createRef();
    this.domain_ref = createRef();
    this.type_ref = createRef();
    this.data_ref = createRef();
    this.status_ref = createRef();
    this.panel_ref = createRef();
    this.onChange_disable = this.onChange_disable.bind(this);
    this.displayPanel = this.displayPanel.bind(this);
    this.Cancel = this.Cancel.bind(this);
    this.addInputSite = this.addInputSite.bind(this);
    this.onChange_enable = this.onChange_enable.bind(this);
    this.onChange_delete = this.onChange_delete.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount = () => {
    axios
      .get("http://localhost/data/website_data.json")
      .then((res) => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onClick = (event) => {
    this.state.select_checked.push(event.target.getAttribute("data_value"));
    this.setState({ select_checked: this.state.select_checked });
    console.log(this.state.select_checked);
  };

  displayPanel = (e) => {
    this.state.display_panel = "block";
    this.state.display_list = "none";
    this.setState({ style: this.state.display_panel });
  };

  Cancel = (e) => {
    this.state.display_panel = "none";
    this.setState({ style: this.state.display_panel });
  };

  addInputSite = (e) => {
    this.state.data.forEach((element) => {
      element["domain_name"] = this.domain_ref.current.value;
      console.log("domain name is:", element["domain_name"]);
      element["type"] = this.type_ref.current.value;
      console.log("type:", element["type"]);
      element["company_name"] = this.company_ref.current.value;
      console.log("company name is:", element["company_name"]);
      element["data_create"] = this.data_ref.current.value;
      console.log("data create is:", element["data_create"]);
      element["status"] = this.status_ref.current.value;
      console.log("status is:", element["status"]);
      this.state.display_list = "block";
      this.setState({ style: this.state.display_list });
    });
    axios
      .post("http://localhost/data/website_data.json", {
        domain_name: this.domain_ref.current.value,
        company_name: this.company_ref.current.value,
        data_create: this.data_ref.current.value,
        type: this.type_ref.current.value,
        status: this.status_ref.current.value,
      })
      .then((res) => {
        console.log("gasdfyf", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onChange_disable = (e) => {
    this.state.data.forEach((element) => {
      console.log(
        element,
        this.state.select_checked,
        this.state.select_checked.includes(element["id"].toString())
      );
      if (this.state.select_checked.includes(element["id"].toString())) {
        element["status"] = "غیر فعال";
      }
    });
    this.setState({ data: this.state.data });
  };

  onChange_enable = (e) => {
    this.state.data.forEach((element) => {
      console.log(
        element,
        this.state.select_checked,
        this.state.select_checked.includes(element["id"].toString())
      );
      if (this.state.select_checked.includes(element["id"].toString())) {
        element["status"] = " فعال";
      }
      this.setState({ data: this.state.data });
    });
  };

  onChange_delete = (e) => {
    this.state.data.forEach((element) => {
      if (this.state.select_checked.includes(element["id"].toString())) {
        element["display"] = "none";
        // call backend to delete
      }
    });
    this.setState({ data: this.state.data });
  };

  render() {
    return (
      <div>
        <h2>مدیریت سایت</h2>
        <hr />
        <div className="div_site" style={{ display: this.state.display_list }}>
          <table className="user_table">
            <thead>
              <tr>
                <th className="td_user_table" colSpan="2">
                  ID
                </th>
                <th className="td_user_table" colSpan="2">
                  نام دامنه
                </th>
                <th className="td_user_table" colSpan="2">
                  نوع سایت
                </th>
                <th className="td_user_table" colSpan="2">
                  اسم شرکت
                </th>
                <th className="td_user_table" colSpan="2">
                  تاریخ ایجاد
                </th>
                <th className="td_user_table" colSpan="2">
                  وضعیت
                </th>
                <th className="td_user_table" colSpan="2">
                  انتخاب
                </th>
              </tr>
            </thead>
            {this.state.data.map((u) => (
              <tbody>
                <tr style={{ display: u["display"] }}>
                  <td colSpan="2">{u["id"]}</td>
                  <td colSpan="2">{u["domain_name"]}</td>
                  <td colSpan="2">{u["type"]}</td>
                  <td colSpan="2">{u["company_name"]}</td>
                  <td colSpan="2">{u["data_create"]}</td>
                  <td colSpan="2">{u["status"]}</td>
                  <td className="check_box" colSpan="2">
                    <input
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
        <input
          className="Add_site"
          type="button"
          value="افزودن سایت"
          onClick={this.displayPanel}
        />
        <input
          className="delete_site"
          type="button"
          value="غیر فعال کردن سایت"
          onClick={this.onChange_disable}
        />
        <input
          className="enable_site"
          type="button"
          value="فعال کردن سایت"
          onClick={this.onChange_enable}
        />
        <input
          className="delete_site"
          type="button"
          value="حذف سایت"
          onClick={this.onChange_delete}
        />
        <div className="add_site_panel" style={{ display: this.state.display_panel }}>
          <form>
            <h3>افزودن سایت جدید</h3>
            <label htmlFor="domain_name">نام دامنه:</label>
            <input type="text" id="domain_name" ref={this.domain_ref} />

            <label htmlFor="type">نوع سایت:</label>
            <input type="text" id="type" ref={this.type_ref} />

            <label htmlFor="company_name">نام شرکت:</label>
            <input type="text" id="company_name" ref={this.company_ref} />

            <label htmlFor="data_create">تاریخ ایجاد:</label>
            <input type="text" id="data_create" ref={this.data_ref} />

            <label htmlFor="status">وضعیت:</label>
            <input type="text" id="status" ref={this.status_ref} />

            <input type="button" value="افزودن" onClick={this.addInputSite} />
            <input type="button" value="لغو" onClick={this.Cancel} />
          </form>
        </div>
      </div>
    );
  }
}

export default WebSite;
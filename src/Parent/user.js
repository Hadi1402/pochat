import React, { useState } from "react";
import user_data from "./user_data.json";
import "../static/css/user.css";

function User() {
  const [selectedIds, setSelectedIds] = useState([]);

  function handleRowClick(event) {
    const id = parseInt(event.currentTarget.dataset.id, 10);
    const isSelected = selectedIds.includes(id);

    if (isSelected) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  function handleDisableClick() {
    const newData = user_data.map((user) => {
      if (selectedIds.includes(user.id)) {
        return { ...user, "status user": "غیر فعال" };
      } else {
        return user;
      }
    });

    user_data = newData;
    setSelectedIds([]);
  }

  function handleEnableClick() {
    const newData = user_data.map((user) => {
      if (selectedIds.includes(user.id)) {
        return { ...user, "status user": "فعال" };
      } else {
        return user;
      }
    });

    user_data = newData;
    setSelectedIds([]);
  }

  function handleDeleteClick() {
    const newData = user_data.filter((user) => !selectedIds.includes(user.id));

    user_data = newData;
    setSelectedIds([]);
  }

  return (
    <div>
      <div className="search_user">
        <input type="text" placeholder="جستجو" />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>عکس پروفایل</th>
              <th>نام کاربری</th>
              <th>ایمیل</th>
              <th>زمینه فعالیت</th>
              <th>تاریخ ایجاد</th>
              <th>وضعیت کاربر</th>
            </tr>
          </thead>
          <tbody>
            {user_data.map((user) => (
              <tr
                key={user.id}
                data-id={user.id}
                className={selectedIds.includes(user.id) ? "selected" : ""}
                onClick={handleRowClick}
              >
                <td>{user.id}</td>
                <td><img className="user_logo" src={user.img} alt={user["user_name"]} /></td>
                <td>{user["user_name"]}</td>
                <td>{user.email}</td>
                <td>{user.field}</td>
                <td>{user["data create"]}</td>
                <td>{user["status user"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="user_buttons">
        <button className="user_page_button" onClick={handleDisableClick} disabled={selectedIds.length === 0}>
          غیر فعال کردن
        </button>
        <button className="user_page_button" onClick={handleEnableClick} disabled={selectedIds.length === 0}>
          فعال کردن
        </button>
        <button className="user_page_button" onClick={handleDeleteClick} disabled={selectedIds.length === 0}>
          حذف کاربر
        </button>
      </div>
    </div>
  );
}

export default User;
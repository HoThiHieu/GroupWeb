import React from 'react'
import userApi from '../api/userApi'

export default function EditAdmin({ infoEdit, showEdit, closeEdit }) {
  const user = JSON.parse(localStorage.getItem("user"))
  const handleSubmit = async (event) => {
    try {
        event.preventDefault()
        const _user ={
            full_name: event.target[0].value,
            email: event.target[1].value,
            phone_number: event.target[2].value,
            school_name: event.target[3].value,
            address: event.target[4].value,
            birthday: event.target[5].value,
        }
        const response = await userApi.update(user.id, _user)
        if (response.request.status === 200) {
          console.log(response.data.user.school_name);
            localStorage.setItem('user', JSON.stringify(response.data.user))
            alert(response.data.message)
        }
    } catch (error) {
        //TODO: hiển bị thông báo theo từng error code (error.request.status === 404)
        alert(error)
    }
}
  return (
    <div className="bg-modal" style={{ display: infoEdit ? 'flex' : 'none' }}>
      <div className="modal-editAdmin" >
        <div className="close" onClick={function (event) { showEdit() }}>+</div>
        <img width="100px" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/165897034_1392111231145880_6097197829076764690_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=B5O7s6PBdtwAX-vUmXb&_nc_ht=scontent.fdad4-1.fna&oh=00_AT-H6ARvIhky2UvnkG5kyIezzEs2lBxTJPiKNANHEUUBAg&oe=62B07CAB" height="100px" className="ava-post" style={{ marginRight: "5px" }} />
        <div><input type="file" name="avatar" accept="image/png, image/jpeg, image/jpg" className="input-file"></input></div>
        <form action onSubmit={handleSubmit}>
          <div className="table_content">
            <tbody>
              <tr>
                <td className="no_border">Họ tên</td>
                <td className="no_border">
                  <input type="text" id="nameInput" name="name" required className="inputE"size="27" defaultValue={user.full_name}/>
                </td>
              </tr>
              <tr>
                <td className="no_border">Gmail</td>
                <td className="no_border"><input type="gmail" id="mail" name="mail" readOnly defaultValue={user.email}  className="inputE"
                  size="27" /></td>
              </tr>
              <tr>
                <td className="no_border">SĐT</td>
                <td className="no_border"><input type="numberphone" id="nbpInput" name="nbp"required defaultValue={user.phone_number} className="inputE"
                  size="27" /></td>
              </tr>
              <tr>
                <td className="no_border">Trường</td>
                <td className="no_border"><input type="school" id="sclInput" name="scl" required defaultValue={user.school_name} className="inputE"
                  size="27" /></td>
              </tr>
              <tr>
                <td className="no_border">Địa chỉ</td>
                <td className="no_border"><input type="address" id="addressInput" name="address"required defaultValue={user.address} className="inputE"
                  size="27" /></td>
              </tr>
              <tr>
                <td className="no_border">Giới tính</td>
                <td className="no_border">
                  <input type="radio" id="manCheck" name="drone" value="man" checked/>
                  <label> Nam </label> 
                  <input type="radio" id="womanCheck" name="drone" value="woman"/>
                  <label> Nữ </label>
                </td>
              </tr>
              <tr>
                <td className="no_border">Ngày sinh</td>
                <td className="no_border">
                  <input type="date" id="sinhnhat" name="trip-start" size="35" min="1950-01-01" max="2005-12-31" defaultValue={user.birthday} className="input-date">
                    </input>
                </td>
              </tr>
            </tbody></div>
            <button type="submit" className="btn-submit" >Lưu</button>
        </form>
        {/* <a className="button1" onClick={function (event) { closeEdit() }} >Lưu</a> */}
      </div>
    </div>
  )
}

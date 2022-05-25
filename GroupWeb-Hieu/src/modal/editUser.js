import React from 'react'

export default function EditAdmin({ infoEdit, showEdit, closeEdit }) {
  return (
    <div className="bg-modal" style={{ display: infoEdit ? 'flex' : 'none' }}>
      <div className="modal-editAdmin" >
        <div className="close" onClick={function (event) { showEdit() }}>+</div>
        <img width="100px" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/165897034_1392111231145880_6097197829076764690_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=B5O7s6PBdtwAX-vUmXb&_nc_ht=scontent.fdad4-1.fna&oh=00_AT-H6ARvIhky2UvnkG5kyIezzEs2lBxTJPiKNANHEUUBAg&oe=62B07CAB" height="100px" className="ava-post" style={{ marginRight: "5px" }} />
        <div><input type="file" name="avatar" accept="image/png, image/jpeg, image/jpg" className="input-file"></input></div>
        <form action>
          <div className="table_content">
            <tbody>
              <tr>
                <td className="no_border">Họ tên</td>
                <td className="no_border"><input type="text" id="nameInput" name="name" required placeholder="Ho Min Hiu" className="inputE"
                  size="27" /></td>
              </tr>
              <tr>
                <td className="no_border">Gmail</td>
                <td className="no_border"><input type="gmail" id="mail" name="mail" readOnly value="oppahd96@gmail.com" className="inputE"
                  size="27" /></td>
              </tr>
              <tr>
                <td className="no_border">SĐT</td>
                <td className="no_border"><input type="numberphone" id="nbpInput" name="nbp" value="" required placeholder="0928488738" className="inputE"
                  size="27" /></td>
              </tr>
              <tr>
                <td className="no_border">Trường</td>
                <td className="no_border"><input type="school" id="sclInput" name="scl" value="" required placeholder="Bách Khoa Đà Nẵng" className="inputE"
                  size="27" /></td>
              </tr>
              <tr>
                <td className="no_border">Địa chỉ</td>
                <td className="no_border"><input type="address" id="addressInput" name="address" value="" required placeholder="Đà Nẵng" className="inputE"
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
                  <input type="date" id="sinhnhat" name="trip-start" size="35" min="1950-01-01" max="2005-12-31" value="2001-12-03" className="input-date">
                    </input>
                </td>
              </tr>
            </tbody></div>
        </form>
        <a className="button1" onClick={function (event) { closeEdit() }} >Lưu</a>
      </div>
    </div>
  )
}

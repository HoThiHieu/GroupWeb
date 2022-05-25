import React from 'react'


 const UserInfo = ({detail,showInfo,showEdit,userData}) => {
    return (
        <div className="bg-modal" style={{display: detail ? 'flex' : 'none' }}>
            <div className="modal-content" >
                <div className="close" onClick={function(event){showInfo()}}>+</div>
                <img width="100px" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/165897034_1392111231145880_6097197829076764690_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=B5O7s6PBdtwAX-vUmXb&_nc_ht=scontent.fdad4-1.fna&oh=00_AT-H6ARvIhky2UvnkG5kyIezzEs2lBxTJPiKNANHEUUBAg&oe=62B07CAB" height="100px" className="ava-post"/>
                <form action>
                <table>
                    <tbody>
                    <tr>
                        <td>Họ tên</td>
                        {/* <td>{adminData.Full_name}</td> */}
                        <td>Ho Min Hiu</td>
                    </tr>
                    <tr>
                    <td>Gmail</td>
                        {/* <td>{adminData.Email}</td> */}
                        <td>oppahd96@gmail.com</td>
                    </tr>
                    <tr>
                    <td>Số điện thoại</td>
                        {/* <td>{adminData.Email}</td> */}
                        <td>0928488738</td>
                    </tr>
                    <tr>
                    <td>Trường ĐH</td>
                        {/* <td>{adminData.Email}</td> */}
                        <td>Bách Khoa Đà Nẵng</td>
                    </tr>
                    <tr>
                    <td>Địa chỉ</td>
                        {/* <td>{adminData.Email}</td> */}
                        <td>Đà Nẵng</td>
                    </tr>
                    <tr>
                    <td>Giới tính</td>
                        {/* <td>{adminData.Gender == 1? "Man":"Woman"}</td> */}
                        <td>Nam</td>
                    </tr>
                    <tr>
                    <td>Ngày sinh</td>
                        {/* <td>{adminData.DayOfBirth==null? "2001-01-01":adminData.DayOfBirth}</td> */}
                        <td>2001-12-03</td>
                    </tr>
                    </tbody></table>
                </form>
                <a onClick={function(event){showEdit()}} className="button1">Sửa</a>
            </div>
        </div>
    )
}
export default UserInfo



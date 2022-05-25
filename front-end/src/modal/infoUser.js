import React, { useEffect, useState } from 'react'
import moment from 'moment'


 const UserInfo = ({detail,showInfo,showEdit,userData}) => {
    const user = JSON.parse(localStorage.getItem("user"))
    const gender = user.gender ? 'Nam' : 'Nữ'
    const [birthday, setBirthday] = useState('01-01-2001')
    useEffect(() => {
        try {
            if (user) {
                const [month, day, year] = moment(user.birthday)
                    .format('L')
                    .split('/')
                setBirthday([day, month, year].join('/'))
            }
        } catch (error) {}
    }, [user])
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
                        <td>{user.full_name}</td>
                    </tr>
                    <tr>
                    <td>Email</td>
                        {/* <td>{adminData.Email}</td> */}
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                    <td>Số điện thoại</td>
                        {/* <td>{adminData.Email}</td> */}
                        <td>{user.phone_number}</td>
                    </tr>
                    <tr>
                    <td>Trường ĐH</td>
                        {/* <td>{adminData.Email}</td> */}
                        <td>{user.school_name} </td>
                    </tr>
                    <tr>
                    <td>Địa chỉ</td>
                        {/* <td>{adminData.Email}</td> */}
                        <td>{user.address}</td>
                    </tr>
                    <tr>
                    <td>Giới tính</td>
                        {/* <td>{adminData.Gender == 1? "Man":"Woman"}</td> */}
                        <td>{gender}</td>
                    </tr>
                    <tr>
                    <td>Ngày sinh</td>
                        {/* <td>{adminData.DayOfBirth==null? "2001-01-01":adminData.DayOfBirth}</td> */}
                        <td>{birthday}</td>
                    </tr>
                    </tbody></table>
                </form>
                <button onClick={() => {showEdit()}} className="btn-submit" >Sửa</button>
                {/* <a onClick={function(event){showEdit()}} className="btn-submit">Sửa</a> */}
            </div>
        </div>
    )
}
export default UserInfo



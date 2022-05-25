import React from 'react'
import {IoMdSchool} from 'react-icons/io'
import {IoHome} from 'react-icons/io5'
import '../styles/infoUserPost.css'

const InfoUserPost = ({openShow}) => {
  return (
    <div style={{display: openShow ? 'flex' : 'none' }}>
        <div className="modal-info-user-post" >
            <div className="info-detail">
                <img width="100" height="100" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/280975691_1351711925323115_7202914147416521192_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=joHZ0-AGovsAX_LLThD&_nc_ht=scontent.fdad4-1.fna&oh=00_AT91HEt7CNBiYrmm889xQzsIlKYvz568B5xeT8HdGoJLSQ&oe=628FAEC8" alt="avatar" style={{float: 'left'}} className='ava-post1'/>
                <div className="detail-title">Thái Văn Thọ</div>
                <div className="detail-text">
                    <IoMdSchool size={25} className="ava-post1" color='rgb(210, 210, 210)'/>
                    <div className="school-text">Từng học tại Trường Đại Học Bách Khoa-Đại Học Đà Nẵng</div>
                    <IoHome size={22} className="ava-post1" color='rgb(210, 210, 210)'/>
                    <div className="address-text">Sống tại Quảng Trị</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoUserPost
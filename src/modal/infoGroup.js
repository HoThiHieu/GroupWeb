import React from 'react'
import {IoMdSchool} from 'react-icons/io'
import {FaUserFriends} from 'react-icons/fa'
import {CgFeed} from 'react-icons/cg'
import {ImStarFull,ImStarHalf,ImStarEmpty} from 'react-icons/im'

const InfoGroup = ({openShow}) => {
  return (
    <div style={{display: openShow ? 'flex' : 'none' }}>
        <div className="modal-info-user-post" >
            <div className="info-detail1">
                <div className="ava-info-modal">
                <img width="100" height="100" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.30497-1/116687302_959241714549285_318408173653384421_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=70495d&_nc_ohc=DfLCFNNNzjkAX99jPt0&_nc_ht=scontent.fdad4-1.fna&oh=00_AT9AcbmgAuT9dNNoz7vQh7f7vjvpuEmxUD5ZWU3PGWVpdA&oe=62B20E43" alt="avatar" style={{float: 'left'}} className='ava-post1'/>
                </div>
                <div className="detail-text">
                    <div className="detail-title">Nhóm Giải Tích 100</div>
                    <IoMdSchool size={25} className="ava-post1" color='rgb(210, 210, 210)'/>
                    <div className="school-text">Môn Giải Tích</div>
                    <FaUserFriends size={22} className="ava-post1" color='rgb(210, 210, 210)'/>
                    <div className="address-text">2.487 thành viên</div>
                    <CgFeed size={22} className="ava-post1" color='rgb(210, 210, 210)'/>
                    <div className="address-text"><ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarHalf/>・4.3 sao</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoGroup;
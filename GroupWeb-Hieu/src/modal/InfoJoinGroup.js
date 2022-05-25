import React from 'react'
import '../styles/infoJoinGroup.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {IoMdSchool} from 'react-icons/io'
import {IoTimeOutline} from 'react-icons/io5'
import {FaUserFriends} from 'react-icons/fa'
import {MdOutlinePostAdd} from 'react-icons/md'
import {CgFeed} from 'react-icons/cg'
import {ImStarFull,ImStarHalf} from 'react-icons/im'

const InfoJoinGroup = ({openInfo,closeInfo}) => {
  return (
    <div className="bg-join-group" style={{display: openInfo ? 'block' : 'none'}}>
        <AiFillCloseCircle onClick={function(Event) {closeInfo()}} className="icon-close" size={30}/>
        <div className="detail-group-join">
            <div className="img-position">
                <img width="350" height="200" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/72580117_2449937788595820_5737933847685758976_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8631f5&_nc_ohc=wUX8GQKpl78AX-zMz12&_nc_ht=scontent.fdad4-1.fna&oh=00_AT8opiXTmJL-6H72TYvqHGVhuuEBdFQk4IfcJLbWRKShFQ&oe=62B1CA95" alt="avatar" style={{float: 'left'}} className='ava-item-group-joined1'/>
            </div>
            <div className="detail-container-gr">
                <div className="title-group">Group for React.js Developers</div>
                <div className="txt-detail-group"><IoMdSchool className='icon-group1' size={20}/>Lập trình web nâng cao</div>
                <div className="txt-detail-group"><FaUserFriends className='icon-group1' size={20}/>Tổng cộng 2.021 thành viên</div>
                <div className="txt-detail-group"><MdOutlinePostAdd className='icon-group1' size={20}/>Hôm nay có 20 bài viết mới</div>
                <div className="txt-detail-group"><IoTimeOutline className='icon-group1' size={20}/>Đã tạo nhóm vào 5 tháng 2, 2020</div>
                <div className="txt-detail-group"><CgFeed className='icon-group1' size={20}/><ImStarFull className='ic-star'/><ImStarFull className='ic-star'/><ImStarFull className='ic-star'/><ImStarFull className='ic-star'/><ImStarHalf className='ic-star'/>・4.6 sao</div>
            </div>
        </div>
        <div className="btn-join-gr">Tham gia nhóm</div>
    </div>
  )
}

export default InfoJoinGroup
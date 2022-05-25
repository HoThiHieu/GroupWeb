import React from 'react'
import {IoMdSchool} from 'react-icons/io'
import {FaUserFriends} from 'react-icons/fa'
import {MdOutlinePostAdd} from 'react-icons/md'

const ItemGroup = ({openInfo}) => {
  return (
    <div className="item-group-wnj" onClick={function(event){openInfo()}}>
    <img width="100" height="100" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/72580117_2449937788595820_5737933847685758976_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8631f5&_nc_ohc=wUX8GQKpl78AX-zMz12&_nc_ht=scontent.fdad4-1.fna&oh=00_AT8opiXTmJL-6H72TYvqHGVhuuEBdFQk4IfcJLbWRKShFQ&oe=62B1CA95" alt="avatar" style={{float: 'left'}} className='ava-item-group-joined'/>
    <div className="name-group-wnj">Group for React.js Developers</div>
    <div className="detail-group-wnj"><IoMdSchool className='icon-group'/>Lập trình web nâng cao</div>
    <div className="detail-group-wnj"><FaUserFriends className='icon-group'/>2.021 thành viên</div>
    <div className="detail-group-wnj"><MdOutlinePostAdd className='icon-group'/>8 bài viết/ngày</div>
</div>
  )
}

export default ItemGroup
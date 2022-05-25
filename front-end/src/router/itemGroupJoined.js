import React from 'react'
import { useNavigate } from 'react-router-dom'

const ItemGroupJoined = () => {
  const navigate = useNavigate()
  const openInfoGroup = () => {
    navigate("/group/detail")
  }
  return (
    <div className="item-group-joined" onClick={function(event){openInfoGroup()}}>
        <img width="70" height="70" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.30497-1/116687302_959241714549285_318408173653384421_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=70495d&_nc_ohc=DfLCFNNNzjkAX99jPt0&_nc_ht=scontent.fdad4-1.fna&oh=00_AT9AcbmgAuT9dNNoz7vQh7f7vjvpuEmxUD5ZWU3PGWVpdA&oe=62B20E43" alt="avatar" style={{float: 'left'}} className='ava-item-group-joined'/>
        <div className="name-group-joined">Nhóm Giải Tích 100</div>
        <div className="active-group-joined">Lần hoạt động gần nhất: 20 giờ</div>
    </div>
  )
}

export default ItemGroupJoined
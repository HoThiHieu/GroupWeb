import React,{useState} from 'react'
import '../styles/comment.css'
import Cmtincmt_post from './cmtincmt_post'

const Comment = () => {
    const [openCmt,setOpenCmt] = useState(false);
    const changeCmtinCmt = () => {
        setOpenCmt(!openCmt);
    }
  return (
    <div className='comment-container' >
        <div className='ava-cmt'>
            <img width="35" height="35" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/248430197_1716355411886614_5865862284700455344_n.jpg?stp=c0.78.320.320a_dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ahK-QrR-ilkAX_th2BK&_nc_ht=scontent.fdad4-1.fna&oh=00_AT-rklvrsX3rT9_mG4pUlMJjcAzUji8hXPVuJOLbo4xL2A&oe=628ED9C5" alt="avatar" style={{float: 'left'}} className='ava-post'/>
        </div>
        <div className='cmt-box'>
            <div className='cmt-content'>
                <div className='name-box'>
                Hoàng Trọng Thái
                </div>
                <div className='content-box'>
                    Mình cũng thắc mắc như bạn 
                </div>
            </div>
            <div className="detail-cmt">
                <div className="like-cmt">Thích</div>
                <div className='cmt-cmt' onClick={function(event){changeCmtinCmt()}}>Phản hồi</div>
                <div className='share-cmt'>Chia sẻ</div>
                <div className='time-cmt'>1 năm</div>
            </div>
            <Cmtincmt_post openCmtinCmt={openCmt}/>
        </div>
    </div>
  )
}

export default Comment
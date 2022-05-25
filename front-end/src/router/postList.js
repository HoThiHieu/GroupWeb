import React,{useState} from 'react'
import {FaGlobeAsia,FaRegShareSquare} from 'react-icons/fa'
import {AiFillLike} from 'react-icons/ai'
import {BiLike} from 'react-icons/bi'
import {VscComment} from 'react-icons/vsc'
import Cmt_post from './cmt_post'
import InfoUserPost from '../modal/infoUserPost'
import InfoGroup from '../modal/infoGroup'

const PostList = () => {
    const [openCmtPost, setOpenCmtPost] = useState(false)
    const changeCmtPost = () => {
        setOpenCmtPost(!openCmtPost);
    }
    const [showUser, setShowUser] = useState(false)
    const changeShowUser = () => {
        setShowUser(!showUser);
    }
    const [showGroup, setShowGroup] = useState(false)
  return (
    <div className='post-list'>
        <div className='header-post'>
            <img width="44" height="44" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.30497-1/116687302_959241714549285_318408173653384421_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=70495d&_nc_ohc=DfLCFNNNzjkAX99jPt0&_nc_ht=scontent.fdad4-1.fna&oh=00_AT9AcbmgAuT9dNNoz7vQh7f7vjvpuEmxUD5ZWU3PGWVpdA&oe=62B20E43" alt="avatar" style={{float: 'left'}} className='ava-post'/>
            <div className="text-post tittle" onMouseOver={()=>setShowGroup(true)} onMouseOut={()=>setShowGroup(false)}>Nhóm Giải Tích 100</div>
            <div className="text-post time"><a className="info-user-post" onMouseOver={function(event) {changeShowUser()}} onMouseOut={function(event) {changeShowUser()}}>Thái Văn Thọ</a>・19 tháng 5 lúc 18:40・<FaGlobeAsia className='icon-time'/></div>
        </div>
        <InfoGroup openShow={showGroup}/>
        <InfoUserPost openShow={showUser}/>
        <div className='body-post'>
            <div className='post-content'>
                <p className="content-text">
                Các bạn cho mình hỏi, đkí nhu cầu học giải tích 2, thấy có 28 bạn chắc cũng đông nên chắc trường mở lớp nhỉ. Mà sao chả thấy lịch học ở đâu cả.    
                </p>
            </div>
            <div className='bg-img'>
                <img className='img-content' src='https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/117921314_142105137572913_1544648794730641310_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=825194&_nc_ohc=o6dRtDS93oEAX9tSQOZ&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_FpyqNKPqPuAA3Mz9FqQvUrlp0fl--nuwwI1Pje0pCjQ&oe=62B0D044'></img>
            </div>
        </div>
        <hr/>
        <div >
            <div className='footer-head'>
                <AiFillLike className='icon-time icon-like'/>
                <a className='like-count'>43 lượt thích</a>
                <a className='comment-count' onClick={function(event){changeCmtPost()}}>12 bình luận</a>
                <a className='share-count' onClick={function(event){changeCmtPost()}}>2 lượt chia sẻ</a>
            </div>
            <hr/>
            <div className='footer-foot'>
                <div className='left-foot'>
                    <BiLike size={17} className='icon-foot'/>
                    <a className='icon-time'>Thích</a>
                </div>
                <div className='center-foot' onClick={function(event){changeCmtPost()}}>
                    <VscComment size={17}  className='icon-foot'/>
                    <a className='icon-time'>Bình luận</a>
                </div>
                <div className='right-foot'>
                    <FaRegShareSquare size={17}  className='icon-foot'/>
                    <a className='icon-time'>Chia sẻ</a>
                </div>
            </div>
        </div>
        <div className='cmt-container'>
            <hr style={{margin: '1px 0px 0 15px', width: '867px'}}/>
            <Cmt_post openCmtPost={openCmtPost}/>
        </div>
    </div>
  )
}

export default PostList
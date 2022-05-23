import React from 'react'
import CmtInCmt from './cmtInCmt'
import '../styles/cmtincmt_post.css'

const Cmtincmt_post = ({openCmtinCmt}) => {
  return (
    <div className='cmtincmt-post-container' style={{display: openCmtinCmt ? "contents":"none"}}>
        <CmtInCmt/>
        <div className='post-cmt2'>
            <img width="30" height="30" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/165897034_1392111231145880_6097197829076764690_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8jw5AcDYQSAAX94W-Q8&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_lZOHxcaFA9Wx1E3dZf6Ax5uo1VMOv6hWQGj67Vfvqiw&oe=62AEF79B" alt="avatar" style={{float: 'left'}} className='ava-post'/>
            <div type="text" data-text="Viết bình luận tại đây..." contentEditable="true" className='inp-cmt2'/>
        </div>
    </div>
  )
}

export default Cmtincmt_post
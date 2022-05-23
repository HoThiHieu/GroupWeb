import React from 'react'
import Comment from './comment'
import '../styles/cmt_post.css'

const Cmt_post = ({openCmtPost}) => {
  return (
    <div className='cmt-post-container' style={{display: openCmtPost? 'contents':'none'}}>
        <div className='post-cmt1'>
            <img width="35" height="35" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/165897034_1392111231145880_6097197829076764690_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8jw5AcDYQSAAX94W-Q8&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_lZOHxcaFA9Wx1E3dZf6Ax5uo1VMOv6hWQGj67Vfvqiw&oe=62AEF79B" alt="avatar" style={{float: 'left'}} className='ava-post'/>
            <div type="text" data-text="Viết bình luận tại đây..." contentEditable="true" className='inp-cmt'/>
        </div>
        <Comment/>
    </div>
  )
}

export default Cmt_post
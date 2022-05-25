import React from 'react'
import '../styles/uploadPost.css'
import {TiVideo} from 'react-icons/ti'
import {BsImages} from 'react-icons/bs'
import {FiLink2} from 'react-icons/fi'

const UploadPost = ({openForm}) => {
   
  return (
    <>
    <div className="bg-uploadPost">
        <div className='post-cmt3'>
            <img width="40" height="40" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/165897034_1392111231145880_6097197829076764690_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8jw5AcDYQSAAX94W-Q8&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_lZOHxcaFA9Wx1E3dZf6Ax5uo1VMOv6hWQGj67Vfvqiw&oe=62AEF79B" alt="avatar" style={{float: 'left'}} className='ava-post'/>
            <div onClick={function(event) {openForm()}} data-text="Hiu ơi, bạn đang nghĩ gì thế ?" contentEditable="true" className='inp-cmt1'/>
        </div>
        <hr/>
        <div className="btn-up">
            <div className='left-foot1' onClick={function(event) {openForm()}}>
                    <TiVideo size={17} className='icon-foot'/>
                    <a className='icon-time'>Video</a>
            </div>
            <div className='center-foot1' onClick={function(event) {openForm()}}>
                    <BsImages size={17} className='icon-foot'/>
                    <a className='icon-time'>Ảnh</a>
            </div>
            <div className='right-foot1' onClick={function(event) {openForm()}}>
                    <FiLink2 size={17} className='icon-foot'/>
                    <a className='icon-time'>Đường dẫn</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default UploadPost           
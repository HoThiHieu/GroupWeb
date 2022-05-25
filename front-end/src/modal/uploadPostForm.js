import React from 'react'
import {FaGlobeAsia} from 'react-icons/fa'
import {TiVideo} from 'react-icons/ti'
import {BsImages} from 'react-icons/bs'
import {FiLink2} from 'react-icons/fi'

const UploadPostForm = ({openForm, closeForm}) => {
  return (
    <div className="bg-modal1" style={{display: openForm ? 'flex' : 'none' }}>
            <div className="modal-content1" >
                <div className="title-upPost">Tạo bài viết</div>
                <div className="close" onClick={function(event){closeForm()}}>+</div>
                <div className="body-upPost">
                    <img width="35" height="35" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/165897034_1392111231145880_6097197829076764690_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8jw5AcDYQSAAX94W-Q8&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_lZOHxcaFA9Wx1E3dZf6Ax5uo1VMOv6hWQGj67Vfvqiw&oe=62AEF79B" alt="avatar" style={{float: 'left',marginLeft: '20px',marginBottom: '20px'}} className='ava-post'/>
                    <div className="upPost-title">Ho Min Hiu</div>
                    <div className="upPost-status"><FaGlobeAsia size={15} className="icon-status"/>Công khai</div>
                    <div onClick={function(event) {openForm()}} data-text="Hiu ơi, bạn đang nghĩ gì thế ?" contentEditable="true" className='inp-cmt4'/>
                    <div className="add-sth">
                        <div style={{float: 'left',fontWeight: 'bold'}}>Thêm vào bài viết</div>
                        <FiLink2 className='add-sth-icon' size={20}/>
                        <BsImages className='add-sth-icon' size={20}/>
                        <TiVideo className='add-sth-icon' size={20}/>
                    </div>
                </div>
                <a onClick={function(event){closeForm()}} className="button1">Đăng</a>
            </div>
        </div>
  )
}

export default UploadPostForm
import React from 'react'
import '../styles/cmtInCmt.css'

const CmtInCmt = () => {
  return (
    <div className="cmtincmt-container" >
        <div className='ava-cmtincmt'>
            <img width="30" height="30" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/280975691_1351711925323115_7202914147416521192_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=joHZ0-AGovsAX_LLThD&_nc_ht=scontent.fdad4-1.fna&oh=00_AT91HEt7CNBiYrmm889xQzsIlKYvz568B5xeT8HdGoJLSQ&oe=628FAEC8" alt="avatar" style={{float: 'left'}} className='ava-post'/>
        </div>
        <div className='cmtincmt-box'>
            <div className='cmtincmt-content'>
                <div className='name-box-cmtincmt'>
                Thái Văn Thọ
                </div>
                <div className='content-box-cmtincmt'>
                    Đkí tín chỉ thôi mà mệt mỏi quá T_T 
                </div>
            </div>
            <div className="detail-cmtincmt">
                <div className="like-cmtincmt">Thích</div>
                <div className='cmt-cmtincmt'>Phản hồi</div>
                <div className='share-cmtincmt'>Chia sẻ</div>
                <div className='time-cmtincmt'>1 năm</div>
            </div>
        </div>
    </div>
  )
}

export default CmtInCmt
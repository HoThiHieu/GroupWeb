import React,{useState} from 'react'
import '../styles/addGroup.css'
import {AiFillCloseCircle} from 'react-icons/ai'

const AddGroup = () => {
    const [nameGr,setNameGroup] = useState("Tên nhóm");
    const [topicGr,setTopicGroup] = useState("Chủ đề môn học");
    const changeName = (val) =>{
        if(val==="") setNameGroup("Tên nhóm");
        else setNameGroup(val);
    }
    const changeTopic = (val) =>{
        if(val==="") setTopicGroup("Chủ đề môn học");
        else setTopicGroup(val);
    }
  return (
    <div className="bg-addGr">
        <div className="info-addGr">
            <AiFillCloseCircle className="icon-close1" size={50} onClick={()=>{window.open("http://localhost:3000/group",'_parent')}}/>
            <div className="detail-info-addGr">
                <div className="title-addGr">Tạo nhóm</div>
                <img width="40" height="40" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/165897034_1392111231145880_6097197829076764690_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8jw5AcDYQSAAX94W-Q8&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_lZOHxcaFA9Wx1E3dZf6Ax5uo1VMOv6hWQGj67Vfvqiw&oe=62AEF79B" alt="avatar" style={{float: 'left'}} className='ava-detail-gr'/>
                <div className="name-user">Ho Min Hiu</div>
                <div className="role-user">Quản trị viên</div>
                <input type="text"  className="name-gr" placeholder='Tên nhóm' onChange={(e)=>{changeName(e.target.value)}}/>
                <input type="text"  className="topic-gr" placeholder='Chủ đề môn học' onChange={(e)=>{changeTopic(e.target.value)}}/>
            </div>
            <div className="create-gr">Tạo</div>
        </div>
        <div className="demo-addGr">
            <div className="bg-demo-body">
                <div className="bg-img-container">
                    <img src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png" className='bg-img-demo'/>
                </div>
                <div className="demo-body">
                    <div className="demo-body-title" ><a id="demo-title">{nameGr}</a></div>
                    <div className="demo-body-topic" ><a id="demo-topic">{topicGr}</a>・1 thành viên</div>
                    <hr className="line-hr"/>
                    <div className="navbar-title" style={{marginLeft: '50px'}}>Giới thiệu</div>
                    <div className="navbar-title">Bài viết</div>
                    <div className="navbar-title">Tài liệu</div>
                    <div className="navbar-title">Thành viên</div>
                    <div className="navbar-title">Họp nhóm</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddGroup
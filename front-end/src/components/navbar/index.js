import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons';
import {AiFillHome,AiOutlineDingding} from 'react-icons/ai';
import {RiGroup2Fill} from 'react-icons/ri'
import {IoMdDocument} from 'react-icons/io'
import {BsFillChatQuoteFill} from 'react-icons/bs'
import UserInfo from '../../modal/infoUser';
import EditUser from '../../modal/editUser';

import './navbar.css';
import '../../styles/modals.css'
import '../../styles/table.css'

function Navbar({user}) {
    const [activeNum, setActive] = useState(1);
    const [detail, setStateE] = useState(false)
    const showInfo = () =>{
      setStateE(!detail);
    }
    const [editform, setEdit] = useState(false)
    const showEdit = () => {
      setStateE(!detail);
      setEdit(!editform)};
    const closeEdit = () => {
      setEdit(!editform)
    }
    const handleLogout = (value) => {
        if(value === "Log out"){
          if(window.confirm("Are you sure you want to log out?")){
            localStorage.removeItem('token');
            window.location.href = "/";
          }
          else return;
        }
      }
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
    <div className='navbar'>
    <div className="menu_bars">
          <div className="sidebar__img">
            <Link to='/'><AiOutlineDingding size={37} onClick={() => setActive(1)}/></Link>
            <h1 className="text" >GROUP STUDY</h1>
          </div>
      </div>
      <div >
        <Link to='/home'><AiFillHome size={30} className={activeNum===1?'icon-menu active':'icon-menu'} onClick={() => setActive(1)}/></Link>
        <Link to='/group'><RiGroup2Fill size={30} className={activeNum === 2?'icon-menu active':'icon-menu'} onClick={() => setActive(2)}/></Link>
        <Link to='/document'><IoMdDocument size={30} className={activeNum === 3?'icon-menu active':'icon-menu'} onClick={() => setActive(3)}/></Link>
      </div>
      <div className="navbar__right">
      <Link to='/chat'><BsFillChatQuoteFill size={28} onClick={()=> setActive(0)}/></Link>
      <a onClick={showInfo} className="ava1">
        <img width="40" height="40" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/165897034_1392111231145880_6097197829076764690_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8jw5AcDYQSAAX94W-Q8&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_lZOHxcaFA9Wx1E3dZf6Ax5uo1VMOv6hWQGj67Vfvqiw&oe=62AEF79B" alt="avatar" className="ava-post"/>
      </a>
    </div>
    </div>
   <UserInfo detail={detail} showInfo={showInfo} showEdit={showEdit} userData={user}/>
   <EditUser infoEdit={editform} showEdit={showEdit} closeEdit={closeEdit}/> 
    </IconContext.Provider>
    </>
  )
}

export default Navbar
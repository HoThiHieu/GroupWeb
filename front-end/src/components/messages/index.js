import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { MdOutlineTagFaces } from "react-icons/md"
import { ImFilePicture } from "react-icons/im"
import { BsHeart } from "react-icons/bs"

import FriendMessages from "./friend"
import MyMessages from "./my"

import './messages.scss'

function Messages(props) {
    return (
        <div className="messages-content" style={{ display: props.state ? 'block' : 'none' }}>
            <div className="messages-content__header">
                <div className="avatar">
                    <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/165897034_1392111231145880_6097197829076764690_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8jw5AcDYQSAAX94W-Q8&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_lZOHxcaFA9Wx1E3dZf6Ax5uo1VMOv6hWQGj67Vfvqiw&oe=62AEF79B" />

                </div>
                <div className="name">Hồ Minh Hiếu</div>
                <AiOutlineInfoCircle className="icon"/>
            </div>
            <div className="messages-content__messanges">
                <FriendMessages message="êiiiii"/>
                <MyMessages message="Sao á"/>
                <FriendMessages message="Gửi giùm slide it nihongo vơi"/>
                <MyMessages message="Đợi xíu đang làm á"/>
                <FriendMessages message="Okeee"/>
                <FriendMessages message="êiiiii"/>
                <MyMessages message="Sao á"/>
                <FriendMessages message="Gửi giùm slide it nihongo vơi"/>
                <MyMessages message="Đợi xíu đang làm á"/>
                <FriendMessages message="Okeee"/>
                <FriendMessages message="êiiiii"/>
                <MyMessages message="Sao á"/>
                <FriendMessages message="Gửi giùm slide it nihongo vơi"/>
                <MyMessages message="Đợi xíu đang làm á"/>
                <FriendMessages message="Okeee"/>

            </div>
            <div className="messages-content__send-messange">
                <div className="item">
                    <MdOutlineTagFaces className="icon"/>
                    <textarea  className="textarea" placeholder="Messange..."></textarea >
                    <ImFilePicture className="icon"/>
                    <BsHeart className="icon"/>
                </div>
            </div>
        </div>
    )
}
export default Messages;
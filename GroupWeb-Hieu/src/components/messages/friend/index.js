import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai"

import './friend-messages.scss'

function FriendMessages(props) {
    return (
        <div className="friend-messages-content">
            <div className="avatar">
                    <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/165897034_1392111231145880_6097197829076764690_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8jw5AcDYQSAAX94W-Q8&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_lZOHxcaFA9Wx1E3dZf6Ax5uo1VMOv6hWQGj67Vfvqiw&oe=62AEF79B" />

                </div>
                <div className="messange">{props.message}</div>
        </div>
    )
}
export default FriendMessages;
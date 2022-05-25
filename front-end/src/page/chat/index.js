import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import Messages from "../../components/messages"

import './chat.scss'
function Chat() {
    const [ showMessange,  setShowMessange ] =useState(false);

    return (
        <div className="chat-container">
            <div className="chat-content">
                <div className="chat-content-left">
                    <div className="chat-content-left__header">
                        <div className="chat-content-left__header__user-name">
                            <span className="span">h_hiuu</span>
                            <IoIosArrowDown className="icon-arrow-dowm" />
                        </div>
                        <FiEdit className="icon-edit" />
                    </div>
                    <div className="chat-content-left__content">
                        <div className="chat-content-left__content__small-messenger" onClick={()=> setShowMessange(true)}>
                            <div className="avatar">
                                <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/165897034_1392111231145880_6097197829076764690_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8jw5AcDYQSAAX94W-Q8&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_lZOHxcaFA9Wx1E3dZf6Ax5uo1VMOv6hWQGj67Vfvqiw&oe=62AEF79B" />

                            </div>
                            <div className="name">
                                <div>Hồ Minh Hiếu</div>
                                <div>Okelala</div>
                            </div>
                        </div>
                        <div className="chat-content-left__content__small-messenger" onClick={()=> setShowMessange(true)}>
                            <div className="avatar">
                                <img src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/248430197_1716355411886614_5865862284700455344_n.jpg?stp=c0.78.320.320a_dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ahK-QrR-ilkAX_th2BK&_nc_ht=scontent.fdad4-1.fna&oh=00_AT-rklvrsX3rT9_mG4pUlMJjcAzUji8hXPVuJOLbo4xL2A&oe=628ED9C5" />

                            </div>
                            <div className="name">
                                <div>Hoàng Trọng Thái</div>
                                <div>Cúp học IT nihongo ko</div>
                            </div>
                        </div>
                        <div className="chat-content-left__content__small-messenger" onClick={()=> setShowMessange(true)}>
                            <div className="avatar">
                                <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/273474120_999640034287997_2727602269932404068_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=2xm0IHwQkccAX9ARqjV&_nc_ht=scontent.fdad3-4.fna&oh=00_AT9_b5sIkt1A4Y2so2T7UHhGn63T_n5el-97N9N7PCE5-Q&oe=629340FB" />

                            </div>
                            <div className="name">
                                <div>Huỳnh Thị Phương Thanh</div>
                                <div>Ăn bún đậu khum, Thanh bao nè</div>
                            </div>
                        </div>
                        <div className="chat-content-left__content__small-messenger" onClick={()=> setShowMessange(true)}>
                            <div className="avatar">
                                <img src="https://scontent.fdad3-5.fna.fbcdn.net/v/t1.6435-9/179047978_311662266986540_6709246847358981490_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=79524b&_nc_ohc=Pwr33CN860IAX_gO3JC&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-EeMsCPFnTHuuMWTmY1mHuyK7xrpNpoTM0GMJo4w8bUQ&oe=62B19DA7" />

                            </div>
                            <div className="name">
                                <div>Huế Food-Review</div>
                                <div>Xời, tuyệt vờiiii !</div>
                            </div>
                        </div>
                        <div className="chat-content-left__content__small-messenger" onClick={()=> setShowMessange(true)}>
                            <div className="avatar">
                                <img src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.6435-9/156128256_257515235972296_6664192526351793332_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=4m-czeEJIzUAX9MjEDr&_nc_ht=scontent.fdad3-6.fna&oh=00_AT-_pKPuJW3rGnennzIeQ0gVGcRyjDpOUgv0VNzW-FNM5Q&oe=62B50BD1" />

                            </div>
                            <div className="name">
                            <div>Trần Bảo</div>
                                <div>Okelala</div>
                            </div>
                        </div>
                        <div className="chat-content-left__content__small-messenger" onClick={()=> setShowMessange(true)}>
                            <div className="avatar">
                                <img src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.6435-9/158240811_1774217969414996_7348969297362389040_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=TGpFzRDLwxIAX8yuMVV&tn=jDrau0fD6wdaloOs&_nc_ht=scontent.fdad3-6.fna&oh=00_AT9Pawy3eL7Ppy4PZA1Rd8N004x0uWnpKzqRBBoD4TSbDw&oe=62B17600" />

                            </div>
                            <div className="name">
                            <div>Bùi Phan  Minh Hưng</div>
                                <div>Okelala</div>
                            </div>
                        </div>
                        <div className="chat-content-left__content__small-messenger" onClick={()=> setShowMessange(true)}>
                            <div className="avatar">
                                <img src="https://scontent.fdad3-5.fna.fbcdn.net/v/t1.6435-9/101755934_2726912160864843_5049424668958049408_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qa2hJ7JwlG8AX85hVjW&_nc_ht=scontent.fdad3-5.fna&oh=00_AT8N62y9AnI6EgKP1M2ZBDC-VzH-KOgQN50mrnxe29NXvg&oe=62B50325" />

                            </div>
                            <div className="name">
                                <div>Nguyễn Anh Phương</div>
                                <div>Okelala</div>
                            </div>
                        </div>
                        <div className="chat-content-left__content__small-messenger" onClick={()=> setShowMessange(true)}>
                            <div className="avatar">
                                <img src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/214828408_2983890468520789_4430837439778073477_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=O0NbdMmfL7AAX-XWdl-&_nc_ht=scontent.fdad3-1.fna&oh=00_AT_NEtzoIWVVldn_aRM9paW5HV21Brg36M6R8e9RwUbSWA&oe=62933153" />

                            </div>
                            <div className="name">
                                <div>Nguyễn Thị Như Ngọc</div>
                                <div>Okelala</div>
                            </div>
                        </div>
                        <div className="chat-content-left__content__small-messenger" onClick={()=> setShowMessange(true)}>
                            <div className="avatar">
                                <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/165897034_1392111231145880_6097197829076764690_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8jw5AcDYQSAAX94W-Q8&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_lZOHxcaFA9Wx1E3dZf6Ax5uo1VMOv6hWQGj67Vfvqiw&oe=62AEF79B" />

                            </div>
                            <div className="name">
                                <div>Hồ Minh Hiếu</div>
                                <div>Okelala</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat-content-right">
                    <Messages state={showMessange} />
                    <div className="chat-content-right__content">
                        <RiMessengerLine className="icon"/>
                        <p>Your Messages</p>
                        <p>Hãy gửi tin nhắn và ảnh cho bạn bè hoặc nhóm</p>
                        <button>Gửi tin nhắn</button>
                    </div>
                    
                </div>
                    
            </div>
        </div>
    )
}

export default Chat
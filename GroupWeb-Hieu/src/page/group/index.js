import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { BiMessageAltError } from 'react-icons/bi'
import ItemGroup from '../../router/itemGroup'
import InfoJoinGroup from '../../modal/InfoJoinGroup'
import ItemGroupJoined from '../../router/itemGroupJoined'

import './group.css'

const Group = () => {
    const [statusInfoGroup, setInfoGroup] = useState(false);
    const openInfoGroup = () => {
        setInfoGroup(true);
    }
    const closeInfoGroup = () => {
        setInfoGroup(false);
    }
    const openAddInfoGroup = () => {
        window.open("http://localhost:3000/group/create", '_parent');
    }
    return (
        <div className="bg-gr">
            <div className="gr-search">
                <div className="header-grs">
                    <div className='title-grs'>Nhóm</div>
                    <input onKeyDown={(e) => {
                        if (e.code === "Enter") {
                            window.open("http://localhost:3000/group", '_parent')
                        }
                    }} type="text" className="search-grs" placeholder='Tìm kiếm nhóm' />
                    <div className="btn-add-gr" onClick={function (event) { openAddInfoGroup() }}><IoMdAdd className='icon-add-gr' />Tạo nhóm mới</div>
                </div>
                <div className="footer-grs">
                    <div className="title-footer-grs">Nhóm bạn đã tham gia</div>
                    <div className="item-group-grs">
                        <ItemGroupJoined />
                        <ItemGroupJoined />
                        <ItemGroupJoined />
                        <ItemGroupJoined />
                        <ItemGroupJoined />
                        <ItemGroupJoined />
                        <ItemGroupJoined />
                        <ItemGroupJoined />
                    </div>
                </div>
            </div>
            <div className="gr-list">
                <div className="item-group">
                    <ItemGroup openInfo={openInfoGroup} />
                    <ItemGroup openInfo={openInfoGroup} />
                    <ItemGroup openInfo={openInfoGroup} />
                    <ItemGroup openInfo={openInfoGroup} />
                    <ItemGroup openInfo={openInfoGroup} />
                    <ItemGroup openInfo={openInfoGroup} />
                    <ItemGroup openInfo={openInfoGroup} />
                    <ItemGroup openInfo={openInfoGroup} />
                    <ItemGroup openInfo={openInfoGroup} />
                    <ItemGroup openInfo={openInfoGroup} />
                    <ItemGroup openInfo={openInfoGroup} />
                    <ItemGroup openInfo={openInfoGroup} />
                    <ItemGroup openInfo={openInfoGroup} />
                </div>
            </div>
            <div className="gr-info">
                <InfoJoinGroup openInfo={statusInfoGroup} closeInfo={closeInfoGroup} />
                <div className="notifi-gri"><BiMessageAltError className='icon-error' size={22} />Không có thông tin</div>
            </div>
        </div>
    )
}

export default Group
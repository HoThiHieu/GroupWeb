import React from 'react'
import { IoMdAdd, } from 'react-icons/io'
import { IoPersonAdd } from 'react-icons/io5'
import { CgMoreO } from 'react-icons/cg'
import { BsFillPersonCheckFill, BsCaretDownFill } from 'react-icons/bs'
import ItemGroupJoined from '../../../router/itemGroupJoined'

import './detail-group.css'

const DetailGroup = () => {
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
      <div className="bg-info-gr-container">
        <div className="bg-demo-body1">
          <div className="bg-img-container1">
            <img src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png" className='bg-img-demo1' />
          </div>
          <div className="demo-body1">
            <div className="demo-body-title1" ><a id="demo-title">Nhóm Giải Tích 100</a></div>
            <div className="demo-body-topic1" ><a id="demo-topic">Môn Giải Tích</a>・2.487 thành viên</div>
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-1/46043984_2155619974698887_1827849098045161472_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=r_553SsfDwYAX8fISGo&_nc_ht=scontent.fdad4-1.fna&oh=00_AT_a8Om0Gf3-OKh2H1F6Skc2G3gx2_QzUon6k1A4OvZ5Xw&oe=62B2ED62" style={{ marginLeft: '18px' }} alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/248430197_1716355411886614_5865862284700455344_n.jpg?stp=c0.14.56.56a_cp0_dst-jpg_p56x56&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=X8tZQezE-8kAX9obkzQ&tn=DKtWnFLUP42S03VZ&_nc_ht=scontent.fdad4-1.fna&oh=00_AT-0lazSKSkmgyslcVaBjyA4kZuMGSM1IMj-6oOAwigVDg&oe=6290D405" alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/257478914_3155790498041421_5807366477633902760_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=AfzBZB37W6UAX-Fzz4a&_nc_ht=scontent.fdad4-1.fna&oh=00_AT_pFycD4XuunYIMd5KHxrWrmtJaLxisu3xwwgY2Pw4WSg&oe=6292254D" alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-1/128872663_2460407670935310_4351268844168974762_n.jpg?stp=c24.0.56.56a_cp0_dst-jpg_p56x56&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RCH6Dks_b8QAX9IrHF6&_nc_ht=scontent.fdad4-1.fna&oh=00_AT_7MxpAF1GLv2TLJdEkDipL06HtFJUq_bx33XWGC3qKsg&oe=62B1CD53" alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/272410206_1703517446663656_6673875935144292258_n.jpg?stp=cp0_dst-jpg_s56x56&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=9gHG5t8APwkAX9VJw9f&_nc_ht=scontent.fdad4-1.fna&oh=00_AT_YKe5RGsjOrJyz43DBoSBZ6m-o_s3rSHX-PQJZ_MV1Wg&oe=62921BAE" alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/280190488_3215374162081596_4779113247927911416_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=t4SrpPsnnwIAX-5o6aD&_nc_ht=scontent.fdad4-1.fna&oh=00_AT8zVFlN0oVq4329KkCA-W39XXObZXR9uGVdKp3FgzA7Lw&oe=62929C0D" alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/270119999_2697181287242883_6675961879124109108_n.jpg?stp=cp0_dst-jpg_s56x56&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=FNG1OXKKYNQAX-_Bk77&tn=DKtWnFLUP42S03VZ&_nc_ht=scontent.fdad4-1.fna&oh=00_AT_U9znoUWgC4cE1DJV6bweYhpmeiQjHkshlf6_dgeAObw&oe=629114A2" alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/278459200_2890830644547505_640228715531888269_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=w2BVhRPmA1QAX8N0ULP&_nc_ht=scontent.fdad4-1.fna&oh=00_AT8-yrqmgAx95PH_zC1SknFUjgnh1Rs4bhgqPK8fD9PFCA&oe=6292A8EB" alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/278312118_3224556551099488_7149961017284088455_n.jpg?stp=c0.13.56.56a_cp0_dst-jpg_p56x56&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qWbEzgnwaB4AX9wB_od&_nc_ht=scontent.fdad4-1.fna&oh=00_AT8oHCEmVhtp6RLBKsIKG3gPzT1qhSKNOEngEUKAjw5DwA&oe=6292925A" alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-1/149666487_1862579940565377_347982400360762384_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2H2_U3JyiQUAX-7OoCX&_nc_ht=scontent.fdad4-1.fna&oh=00_AT-gxf-TA9FdWWbBf1HEfNxvTyjGeweyTw-Y8snHIK2bIQ&oe=62B18ABC" alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/278708234_2822849028013198_670015696026967687_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KLcjF3xzDxwAX-71D9W&_nc_ht=scontent.fdad4-1.fna&oh=00_AT_V1mBruCjj-z5ofx9OfrqunFYSlqTSiw3FBK5n4Z6uOA&oe=6292812C" alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/280374790_1477115089370427_2274356777150785265_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=EkgQUYBEzU4AX-YosuS&tn=DKtWnFLUP42S03VZ&_nc_ht=scontent.fdad4-1.fna&oh=00_AT-LpOluFlx9sZmf0Q9zCmunz4XRBt-BfP_SBsBhu4apmw&oe=6291DE86" alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/279001913_3208132899429877_3860146159971311614_n.jpg?stp=c0.54.320.320a_dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=64S2_TceH3sAX_WYPX7&_nc_ht=scontent.fdad4-1.fna&oh=00_AT9xes59kjLtXkEtyDSOD3f9_z566BuZa2ShPYqAmpZG0g&oe=6291ADE7" alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-1/101755934_2726912160864843_5049424668958049408_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=DXqAOG2CkkoAX9kDowY&_nc_ht=scontent.fdad4-1.fna&oh=00_AT98whKZvRSYLKQUIXhJloLrZZ12QqWSCnmA376t6gZh3w&oe=62B38995" alt="avatar" className="ava-gr" />
            <img width="36" height="36" src="https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-1/278602919_2078622088974581_2390039659150629600_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=dcl8GpBNfqMAX8R8v2P&_nc_ht=scontent.fdad4-1.fna&oh=00_AT9fHFbJNHY6kwHzdEtacXTuZGuj3qZlEM8sLeBfHPLc3A&oe=62918500" alt="avatar" className="ava-gr" />
            <CgMoreO className='ava-gr' size={36} />
            <div className="right-gr">
              <div className="btn-more"><BsCaretDownFill /></div>
              <div className="btn-addMem"><IoPersonAdd className='icon-left' />Mời</div>
              <div className="btn-joined"><BsFillPersonCheckFill className='icon-left' />Đã tham gia<BsCaretDownFill className='icon-right' /></div>
            </div>
            <hr className="line-hr1" />
            <div className="navbar-menu-gr">
              <div className="navbar-title1 active1">Giới thiệu</div>
              <div className="navbar-title1">Bài viết</div>
              <div className="navbar-title1">Họp nhóm</div>
              <div className="navbar-title1">Tài liệu</div>
              <div className="navbar-title1">Thành viên</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailGroup
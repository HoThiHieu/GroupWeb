import React from 'react'
import {BsInfoCircle} from 'react-icons/bs'

function DocFiles() {
  return (
    <tr>
        <td ><div style={{overflow: "hidden",width: "650px",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>Ma Trận là gì và cách giải ma trận </div></td>
        <td ><div style={{overflow: "hidden",width: "200px",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>Đặng Thanh Mai </div></td>
        <td ><div style={{overflow: "hidden",width: "150px",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>Đại Số Tuyến Tính</div></td>
        <td width={40} style={{textAlign: 'center'}}><a href="http://example.com" target="_blank"><BsInfoCircle size="20px" /></a></td>
    </tr>
  )
}

export default DocFiles
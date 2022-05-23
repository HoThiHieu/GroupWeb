import React,{useState} from 'react'
import DocFiles from '../Router/DocFiles'
import Pagination from '../Router/pagination'
import '../styles/document.css'
import '../styles/table.css'

function Document() {
  return (
    <div className='bg-doc'>
        <input type="text" id="myInputUser" placeholder=" Tìm kiếm theo tên môn học, từ khóa tài liệu " />
        <div className='bg-table'>
        <table id="myTable">
        <tbody>
            <tr>
            <th>Tittle document</th>
            <th>Author</th>
            <th>Subject</th>
            <th>Detail</th>
            </tr>
            <DocFiles />
            <DocFiles />
            <DocFiles />
            <DocFiles />
            <DocFiles />
            <DocFiles />
            <DocFiles />
            <DocFiles />
            <DocFiles />
            <DocFiles />
        </tbody>
        </table>
        </div>
        <Pagination />
    </div>
  )
}

export default Document
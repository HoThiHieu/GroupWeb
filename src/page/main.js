import React,{useState} from 'react'
import '../styles/main.css'
import PostList from '../Router/postList'
import UploadPost from '../Router/uploadPost'
import UploadPostForm from '../modal/uploadPostForm'

function Main() {
  const [stateForm, setStateForm] = useState(false)
  const closeForm = () => {
      setStateForm(false);
  }
  const openForm = () => {
    setStateForm(true);
}
  return (
    <div className='bg-main'>
      <div className='bg-post' >
        <UploadPost closeForm={closeForm} openForm={openForm} stateForm={stateForm} />
        <PostList />
        <PostList />
        <PostList />
        <PostList />
        <PostList />
      </div>
      <UploadPostForm openForm={stateForm} closeForm={closeForm}/>
    </div>
  )
}

export default Main
import React,{useState} from 'react'
import PostList from '../../router/postList'
import UploadPost from '../../router/uploadPost'
import UploadPostForm from '../../modal/uploadPostForm'

import './home.css'

function Home() {
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

export default Home
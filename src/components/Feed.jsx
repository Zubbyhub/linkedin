import React, { useEffect, useState } from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';git 
import Post from './Post';
import { db } from './firebase';  
import firebase from 'firebase';

const Feed = () => {
  const [ input, setInput] = useState(''); 
const [posts, setPosts] = useState([]);

useEffect(() => {
  db.collection("posts").onSnapshot(snapshot => (
    setPosts(
      snapshot.docs.map(doc => (
        {
         id: doc.id,
         data: doc.data(),
        }
    )))
  ))
}, [])


const sendPost = e => {
  e.preventDefault();

  db.collection("posts").add({
    name: 'zubby wisdom',
    description: 'this is a test',
    message: input,
    photoUrl: '',
    timestamp: firebase.f
  })
};

  return (
    <div className='feed'>
      <div className="feed_inputContainer">
        <div className="feed_input">
            <CreateIcon />
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                <button type='submit'>Send</button>
            </form>
        </div>
        <div className="feed_inputOptions">
            <InputOption Icon={ImageIcon} title='Photo' color="#70B5B9" />
            <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />
            <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD" />
            <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E" />
        </div>
      </div>

      {/* posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl} }) => {
        <Post 
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
        />
      })}

      
    </div>
  )
}

export default Feed

// App.js
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Posts from './Posts';
import styles from './styles.css';

import { PostDetails } from './PostsDetails';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          {/* <Route path="/new" element={<NewPostForm />} /> */}
        </Routes>
      </div>
  );
}

export default App;
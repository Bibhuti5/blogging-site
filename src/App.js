import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Import 'Switch' once
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';
import './App.css'; // Import your CSS for styling

function App() {
  // Sample data for blog posts (you can replace this with real data from a backend)
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post 1', content: 'This is the content of post 1.' },
    { id: 2, title: 'Post 2', content: 'This is the content of post 2.' },
    { id: 3, title: 'Post 3', content: 'This is the content of post 3.' },
  ]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <PostList posts={posts} />
          </Route>
          <Route path="/post/:id">
            <PostDetail />
          </Route>
          <Route path="/create">
            <PostForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

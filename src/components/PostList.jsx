import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/postsSlice';


const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <ListGroup>
      {posts.map((post) => (
        <ListGroup.Item key={post.id}>
          <Link to={`/user/${post.userId}`}>{post.title}</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PostList;

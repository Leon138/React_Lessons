import { useEffect, useState } from 'react';
import { axiousConfig } from '../../api/axiosConfig';
import './posts-style.css';

interface IPosts {
  id: number;
  userId: number;
  body: string;
  title: string;
}

type typePosts = Array<IPosts>;

export const Posts = () => {
  const [posts, setPosts] = useState<typePosts>([]);

  useEffect(() => {
    (async () => {
      try {
        const posts = await axiousConfig.get('/posts?_limit=15');
        console.log(posts.data);
        return setPosts(posts.data);
      } catch (error: any) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className='postContainer'>
      Posts component
      {posts.map((item) => (
        <div key={item.id} className='item'>
          <div>Id: {item.id}</div>
          <div>Title: {item.title}</div>
        </div>
      ))}
    </div>
  );
};

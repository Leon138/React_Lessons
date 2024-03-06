import { useEffect, useState } from 'react';
import { axiousConfig } from '../../api/axiosConfig';
import { Link } from 'react-router-dom';

interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhase: string;
    bs: string;
  };
}

type typeUsers = Array<IUsers>;

export const Users = () => {
  const [users, setUsers] = useState<typeUsers>([]);

  useEffect(() => {
    (async () => {
      try {
        const users = await axiousConfig.get('/users');
        console.log(users.data);
        return setUsers(users.data);
      } catch (error: any) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className='postContainer'>
      UsersComponent
      {users.map((item) => (
        <div className='item' key={item.id}>
          <Link to={`/user/${item.id}`} style={{ textDecoration: 'none' }}>
            <div>Name: {item.name}</div>
            <div>Email: {item.email}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

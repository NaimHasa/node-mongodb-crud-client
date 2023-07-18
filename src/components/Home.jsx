import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const handleDeleted = user => {
        // console.log('deleting user', user);
        const agree = window.confirm(`Are U Sure You will be Deleted user: ${user.name}`);

        if (agree) {
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))

        }



    }

    return (
        <div>
            <h1>Total Users: {users.length}</h1>

            {
                users.map(user =>
                    <p key={user._id}>
                        {user.name}  {user.email}

                        <button onClick={() => handleDeleted(user)}>X</button>

                    </p>)
            }

        </div>
    );
};

export default Home;
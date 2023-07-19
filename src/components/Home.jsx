import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);
    const handleDeleted = user => {
        // console.log('deleting user', user);
        const agree = window.confirm(`Are U Sure You will be Deleted user: ${user.name}`);

        if (agree) {
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('User Deleted successfully');

                        const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
                        setDisplayUsers(remainingUsers);
                    }

                })

        }



    }

    return (
        <div>
            <h1>Total Users: {displayUsers.length}</h1>

            {
                displayUsers.map(user =>
                    <p key={user._id}>
                        {user.name}

                        {user.email}

                        <Link to={`/update/${user._id}`}><button>Update</button> </Link>
                        <button onClick={() => handleDeleted(user)}>X</button>

                    </p>)
            }

        </div>
    );
};

export default Home;
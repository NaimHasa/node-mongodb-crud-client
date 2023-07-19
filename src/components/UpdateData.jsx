import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateData = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser);
    const handleUpdateUser = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/users/${storedUser._id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }

    const handleInputChange = event => {
        const filed = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[filed] = value;
        setUser(newUser);
    }

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h1> Please Update users: {storedUser.name}</h1>

                <form onSubmit={handleUpdateUser}>
                    <input onChange={handleInputChange} defaultValue={storedUser.name} style={{ margin: '7px' }} type="text" name="name" id="" placeholder='Enter Your Name' required />
                    <br />
                    <input onChange={handleInputChange} defaultValue={storedUser.address} style={{ margin: '7px' }} type="text" name="address" id="" placeholder='Enter Your Address' required />
                    <br />
                    <input onChange={handleInputChange} defaultValue={storedUser.email} style={{ margin: '7px' }} type="email" name="email" id="" placeholder='Enter Your Email' required />
                    <br />
                    <br />
                    <button type='submit'>Update User</button>

                </form>

            </div>

        </div>
    );
};

export default UpdateData;
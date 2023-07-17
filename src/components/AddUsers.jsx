import React, { useState } from 'react';

const AddUsers = () => {
    const [user, setUser] = useState({});
    const handleAddUser = event => {
        event.preventDefault();
        console.log(user);
    }

    const handleInputBlur = event => {
        const filed = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[filed] = value;
        setUser(newUser);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Please Add a new users</h1>

            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} style={{ margin: '10px' }} type="text" name="name" id="" placeholder='Enter Your Name' />
                <br />
                <input onBlur={handleInputBlur} type="email" name="email" id="" placeholder='Enter Your Email' />
                <br />
                <br />
                <button type='submit'>Add User</button>

            </form>

        </div>
    );
};

export default AddUsers;
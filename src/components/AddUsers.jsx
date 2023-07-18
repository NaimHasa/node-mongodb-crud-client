import React, { useState } from 'react';

const AddUsers = () => {
    const [user, setUser] = useState({});
    const handleAddUser = event => {
        event.preventDefault();
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    alert('user successfully added')
                    event.target.reset();
                }
            })




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
                <input onBlur={handleInputBlur} style={{ margin: '7px' }} type="text" name="name" id="" placeholder='Enter Your Name' required />
                <br />
                <input onBlur={handleInputBlur} style={{ margin: '7px' }} type="text" name="address" id="" placeholder='Enter Your Address' required />
                <br />
                <input onBlur={handleInputBlur} style={{ margin: '7px' }} type="email" name="email" id="" placeholder='Enter Your Email' required />
                <br />
                <br />
                <button type='submit'>Add User</button>

            </form>

        </div>
    );
};

export default AddUsers;
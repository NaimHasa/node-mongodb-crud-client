import React from 'react';

const AddUsers = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Add a new users : </h1>

            <form>
                <input type="text" name="name" id="" placeholder='Enter Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Enter Your Email' />
                <br />
                <br />
                <button>Add User</button>

            </form>

        </div>
    );
};

export default AddUsers;
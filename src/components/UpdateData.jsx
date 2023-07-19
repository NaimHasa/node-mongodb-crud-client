import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateData = () => {
    const storedUser = useLoaderData();
    return (
        <div>
            <h1>Update Data:{storedUser.name} </h1>

        </div>
    );
};

export default UpdateData;
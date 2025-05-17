import React from 'react';
import { useLoaderData } from 'react-router';

const UserAbout = () => {
    const user=useLoaderData()
   
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
};

export default UserAbout;
import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth'
const MakeAdmin = () => {
    const [email, setEmail] = useState(" ");
    const [success, setSuccess] = useState(false);
    console.log(success)
    const { token } = useAuth();
    const handleOnblur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        setSuccess(false)
        const user = { email };

        e.preventDefault();
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    console.log(data)
                    setEmail(" ");
                    setSuccess(true)

                }
            })
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50% ' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnblur} variant="standard" />
                <Button type="submit" variant="contained"> Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Successfully added admin</Alert>
            }
        </div>
    );
};

export default MakeAdmin;
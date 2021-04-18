import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const adminFormData = new FormData();
        adminFormData.append('name', data.name)
        adminFormData.append('email', data.email)
        console.log(adminFormData);
        fetch('https://immense-brook-80254.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ adminName: data.name, adminEmail: data.email })
        })
            .then(res => res.json())
            .then(data => {
                const form = document.querySelector('.admin-form');
                form.reset();
                console.log(data);
            })
    };

    return (
        <div>
            <h2>This is Make Admin</h2>
            <form className='admin-form' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Admin Name' {...register("name")} />
                <br />
                <input placeholder='Admin Email' {...register("email")} />
                <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;
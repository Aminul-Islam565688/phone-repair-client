import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';


const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [service, setService] = useState({})

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('title', data.title)
        formData.append('description', data.description)
        formData.append('file', data.img[0])
        fetch('http://localhost:1526/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    console.log(service);
    return (
        <div>
            <h1>Add Service</h1>
            <div>
                <form className='addService-form' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Enter Title' {...register("title")} />
                    <input type='file'{...register("img")} />
                    <textarea placeholder='Enter Title'  {...register("description")} ></textarea>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddServices;
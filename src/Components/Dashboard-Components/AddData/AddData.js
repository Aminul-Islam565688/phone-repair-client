import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddData.css';


const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [corpoService, setCorpoService] = useState({})
    const [corpoFile, setCorpoFile] = useState(null);

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('title', data.title)
        formData.append('description', data.description)
        formData.append('cost', data.cost)
        formData.append('file', data.img[0])
        fetch('https://immense-brook-80254.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const form = document.querySelector('.addService-form');
                form.reset();
            })
            .catch(err => {
                console.log(err);
            })
    };

    // const handleCorpoBlur = (e) => {
    //     const newInfo = { ...corpoService };
    //     newInfo[e.target.name] = e.target.value;
    //     console.log(newInfo);
    //     setCorpoService(newInfo)
    // }
    // const handleCorpoFile = (e) => {
    //     const newFile = e.target.files[0];
    //     console.log(newFile);
    //     setCorpoFile(newFile)
    // }
    // const handleCorpoSubmit = (e) => {
    //     e.preventDefault()
    //     const corpoData = { corpoService, corpoFile };
    //     console.log(corpoData);
    //     fetch('https://immense-brook-80254.herokuapp.com/addCorpoService', {
    //         method: 'POST',
    //         body: { tile: corpoService.title, description: corpoService.description, cost: corpoService.cost, corpoFile }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             const form = document.querySelector('.addCorpoService-form');
    //             form.reset();
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }
    return (
        <div>
            <h1>Add Data</h1>
            <div>
                <h3>Add Service</h3>
                <div>
                    <form className='addService-form' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Enter Title' {...register("title")} />
                        <input id='file' type='file'{...register("img")} />
                        <textarea placeholder='Enter Description'  {...register("description")} ></textarea>
                        <input placeholder='Service Cost' {...register("cost")} />
                        <input type="submit" />
                    </form>
                </div>
            </div>
            {/* <div>
                <h3>Add Corporate Service</h3>
                <div>
                    <form className='addCorpoService-form' onSubmit={(e) => handleCorpoSubmit(e)}>
                        <input onBlur={e => handleCorpoBlur(e)} name='title' placeholder='Enter Title' />
                        <input onChange={e => handleCorpoFile(e)} type='file' />
                        <textarea onBlur={e => handleCorpoBlur(e)} name='description' placeholder='Enter Description' ></textarea>
                        <input onBlur={e => handleCorpoBlur(e)} name='cost' placeholder='Service Cost' />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div> */}
        </div>
    );
};

export default AddServices;
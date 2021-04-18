import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const CustomerReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const review = {
            photo: loggedInUser.photo,
            name: data.name,
            company: data.companyName,
            description: data.description,
        }
        fetch('https://immense-brook-80254.herokuapp.com/customerReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                const reviewForm = document.querySelector('.review-form');
                reviewForm.reset();
                console.log(data)
            })
    };
    return (
        <div>
            <h1>Review</h1>
            <img src={loggedInUser.photo} alt="" />
            <form className='faq-form review-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='faq-form-input' placeholder='Your Name' {...register("name")} />
                <br />
                <input className='faq-form-input my-3' placeholder="Company's name,Designation" {...register("companyName")} />
                <br />
                <textarea className='faq-form-textArea mb-2' placeholder='Description'{...register("description")}></textarea>
                <br />
                <input className='phone-btn' value='Review' type="submit" />
            </form>
        </div>
    );
};

export default CustomerReview;
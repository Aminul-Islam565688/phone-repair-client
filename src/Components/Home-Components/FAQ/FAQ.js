import React from 'react';
import { useForm } from "react-hook-form";
import faqBg from '../../../images/FAQ-bg.jpg';
import './FAQ.css';

const FAQ = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section>
            <div className='faq-container'>
                <div className='faq-img'>
                    <img src={faqBg} alt="" />
                </div>
                <div className='faq-form'>
                    <h2>Ask Your Question</h2>
                    <form className='faq-form' onSubmit={handleSubmit(onSubmit)}>
                        <input className='faq-form-input' placeholder='Enter your Name' {...register("name")} />
                        <br />
                        <input className='faq-form-input my-3' placeholder='Enter your Email' {...register("email")} />
                        <br />
                        <textarea className='faq-form-textArea mb-2' placeholder='Enter your Question'{...register("question")}></textarea>
                        <br />
                        <input className='phone-btn' value='Ask' type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
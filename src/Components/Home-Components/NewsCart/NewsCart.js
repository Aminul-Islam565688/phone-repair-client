import React from 'react';
import './NewsCart.css';

const NewsCart = ({ news }) => {
    return (
        <div className='grid-cart'>
            <img src={news.newsImg} alt="" />
            <h3>{news.newsTitle}</h3>
            <p>{news.newsDesc}</p>
            <div>
                <p>{news.newsDate}</p><p>{news.newsAuthor}</p>
            </div>
        </div>
    );
};

export default NewsCart;
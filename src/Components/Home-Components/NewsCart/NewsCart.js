import React from 'react';
import './NewsCart.css';

const NewsCart = ({ news }) => {
    return (
        <div className='grid-cart'>
            <img src={news.newsImg} alt="" />
            <h4>{news.newsTitle}</h4>
            <p>{news.newsDesc}</p>
            <div className='news-date-author'>
                <p className='news-date'>01/01/2021</p><p className='news-date'>{news.newsAuthor}</p>
            </div>
        </div>
    );
};

export default NewsCart;
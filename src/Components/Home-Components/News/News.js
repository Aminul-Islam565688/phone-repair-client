import React from 'react';
import newsHeadphone from '../../../images/news-headphone.jpg';
import phoneDairy from '../../../images/phone-dairy.jpg';
import tabletPhone from '../../../images/tablet-phone.jpg';
import NewsCart from '../NewsCart/NewsCart';
import './News.css';


const newsData = [
    {
        id: 1,
        newsImg: newsHeadphone,
        newsTitle: 'how to choose headphones for your smartphone',
        newsDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ab nisi libero excepturi dolor optio corporis ipsa veniam necessitatibus, quisquam possimus obcaecati, enim vero atque vel soluta. Aspernatur sunt ipsum nemo ullam. Nisi doloremque, mollitia quaerat eaque vero modi autem!',
        newsDate: 456123,
        newsAuthor: 'Titu'
    },
    {
        id: 2,
        newsImg: tabletPhone,
        newsTitle: 'how to choose headphones for your smartphone',
        newsDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ab nisi libero excepturi dolor optio corporis ipsa veniam necessitatibus, quisquam possimus obcaecati, enim vero atque vel soluta. Aspernatur sunt ipsum nemo ullam. Nisi doloremque, mollitia quaerat eaque vero modi autem!',
        newsDate: 456123,
        newsAuthor: 'Titu'
    },
    {
        id: 3,
        newsImg: phoneDairy,
        newsTitle: 'how to choose headphones for your smartphone',
        newsDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ab nisi libero excepturi dolor optio corporis ipsa veniam necessitatibus, quisquam possimus obcaecati, enim vero atque vel soluta. Aspernatur sunt ipsum nemo ullam. Nisi doloremque, mollitia quaerat eaque vero modi autem!',
        newsDate: 456123,
        newsAuthor: 'Titu'
    },
]


const News = () => {
    return (
        <section className='my-5'>
            <h1 className='phone-text'>OUR NEWS</h1>
            <div className='grid-container phone-container'>
                {newsData.map(news => <NewsCart news={news} key={news.key}></NewsCart>)}
            </div>
        </section>
    );
};

export default News;
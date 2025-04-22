import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Components/NewsCard';

const CategotyNews = () => {
    const {data:news} = useLoaderData()
    console.log(news)
    return (
        <div>
            <h2>Dragon News Home</h2>
            <div>
                {
                    news.map(SingleNews=><NewsCard key={SingleNews._id} news={SingleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategotyNews;
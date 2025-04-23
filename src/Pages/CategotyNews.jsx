import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import NewsCard from '../Components/NewsCard';

const CategotyNews = () => {
    const {data:news} = useLoaderData()
    return (
        <div>
            <h2>Dragon News Home</h2>
            <div>
                {
                    news.map(SingleNews=><NewsCard key={SingleNews._id} news={SingleNews}></NewsCard>)
                }
                <h2>This is news heading </h2>
                <NavLink to="/readmore" className="btn justify-center">Read More</NavLink>
                
            </div>
        </div>
    );
};

export default CategotyNews;
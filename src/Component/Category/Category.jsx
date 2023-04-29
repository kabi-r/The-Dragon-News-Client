import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const Category = () => {
    const {id} = useParams()
    const CategoryNews = useLoaderData()
    console.log(CategoryNews);
    return (
        <div>
            {id && <h4>The Category News {CategoryNews.length}</h4>}
            {
                CategoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const newsData = useLoaderData();
    return (
        <div>
            <h2>Category news of {newsData.length}</h2>
            {
                newsData.map(news => <NewsCard key={news._id}
                    news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import styled from 'styled-components'
import axios from 'axios'


const NewsList = ({category}) => {
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      try{
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get( `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=6e4ced76200e4bcdabf74cfc93988dd5`,);
        setArticles(response.data.articles)
      } catch(e){
        console.log(e);
      }
      setLoading(false)
    }
    fetchData();
  }, [category])

  //대기중일때 로딩
  if(loading){
    return <NewsListBlock>대기중...</NewsListBlock>
  }

  //아티클이 없을 때
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article}/>
        ))}
    </NewsListBlock>
  )
}

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default NewsList
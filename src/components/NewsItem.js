import React from 'react'
import styled from 'styled-components'

const NewsItem = ({article}) => {
  const {title, description, url, urlToImage} = article;

  return (
    <NewsItemBlock>
      <div className='thumbnail'>
        <a href={url} target="_blank"  rel="noopener noreferrer">
          <img src={urlToImage} alt="thumbnail" /></a>
      </div>

      <div className='contents'>
        <h2>
          <a href={url} rel="noopener noreferrer">{title}</a>
          </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  )
}

const NewsItemBlock = styled.div`
  display : flex;
  .thumbnail{
    margin-right:20px;
    img{
      display : block;
      width: 160px;
      height:100px;
      object-fit : cover;
    }
  }
  .contents{
    h2{
      margin : 0;
      a{
        color : #000;
        text-decoration : none;
      }
    }
    p{
      margin : 0;
      line-height : 1.5;
      margin-top:10px;
      white-space:normal;
    }
  }

  & + & {
    margin-top : 30px;
  }
`;


export default NewsItem
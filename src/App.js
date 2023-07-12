import React, { useCallback, useState } from 'react'
import NewsList from './components/NewsList'
import styled from 'styled-components'
import Categories from './components/Categories'

const App = () => {
  const [category, setCategory] = useState("all")
  const onSelect = useCallback((category) => setCategory(category), [])
  return (
    <>
    <HeaderLogo>
      <img src="./img/news_logo.png" alt="" />
    </HeaderLogo>

    <Categories
      category={category}
      onSelect={onSelect}
    />
    <NewsList category={category}/>
    </>
  )
}

const HeaderLogo = styled.h1`
  display:flex;
  justify-content : center;
  img{width : 20%}

`;


export default App

//6e4ced76200e4bcdabf74cfc93988dd5
//        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=6e4ced76200e4bcdabf74cfc93988dd5',
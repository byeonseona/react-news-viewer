import React from 'react'
import styled, { css } from 'styled-components'

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
]

const Categories = ({category,onSelect}) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
        key={c.key}
        active={category === c.name}
        onClick={() => onSelect(c.name)}
        >
        {c.text}
        </Category>
        ))}
    </CategoriesBlock>
  )
}

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin : auto;
  justify-content: space-between;
  border-bottom : 2px solid #ff6600;
  padding-bottom : 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size : 20px;
  cursor : pointer;
  font-weight : bold;
  color : #333;
  &:hover{color:#ff6600;}

  ${(props) => 
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}
`;
export default Categories
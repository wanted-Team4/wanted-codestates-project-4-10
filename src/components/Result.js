import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/js/all.js';
const Result = () => {
  return (
    <ResultBox>
      <Recommend>추천검색어</Recommend>
      <AutoCompleteUl>
        <AutoCompleteLl>
          <Icon className='fas fa-search' />아
        </AutoCompleteLl>
        <AutoCompleteLl>
          <Icon className='fas fa-search' />
          아2
        </AutoCompleteLl>
      </AutoCompleteUl>
    </ResultBox>
  );
};
const ResultBox = styled.div`
  background-color: rgb(255, 255, 255);
  max-width: 700px;
  border-radius: 20px;
  padding: 20px;
  margin: auto;
  box-sizing: border-box;
  font-size: 16px;
`;
const Recommend = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
const AutoCompleteUl = styled.ul`
  padding: 5px;
`;
const AutoCompleteLl = styled.li`
  margin-bottom: 10px;
  font-weight: bolder;
  cursor: pointer;
`;
const Icon = styled.i`
  margin-right: 10px;
`;

export default Result;

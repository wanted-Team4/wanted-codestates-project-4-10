import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/js/all.js';
import Result from './Result';
const Layout = () => {
  return (
    <AllBox>
      <BoxTitle>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </BoxTitle>
      <SearchAllBox>
        <SearchBox>
          <SvgBox>
            <i className='fas fa-search' />
          </SvgBox>
          <InputBox placeholder='질환명을 입력해주세요'></InputBox>
        </SearchBox>
        <SearchBtn>검색</SearchBtn>
      </SearchAllBox>
      <Result></Result>
    </AllBox>
  );
};

const AllBox = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(202, 233, 255);
`;
const BoxTitle = styled.p`
  margin-bottom: 20px;
  padding-top: 10%;
  text-align: center;
  font-size: 2.1rem;
  font-weight: bold;
  line-height: 1.6;
`;
const SearchAllBox = styled.div`
  max-width: 700px;
  margin: 0px auto 10px;
  border-radius: 42px;
  overflow: hidden;
  display: flex;
`;
const SearchBox = styled.div`
  display: flex;
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 20px 24px;
`;
const SearchBtn = styled.button`
  padding: 18px 32px;
  width: 111px;
  border: none;
  background-color: rgb(0, 123, 233);
  font-size: 1.125rem;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
`;
const InputBox = styled.input`
  font-size: 1.125rem;
  width: 100%;
  border: none;
  line-height: 1.2;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;
const SvgBox = styled.div`
  margin-bottom: -5px;
`;

export default Layout;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setItems, search, setKeyword } from "../actions/coordinate";

const Layout = () => {
  const [searchData, setSearchData] = useState([]);
  const [valueData, setValueData] = useState("");
  const { keyword } = useSelector((state) => state.kewordReducer);
  const { items } = useSelector((state) => state.searchDataReducer);
  const dispatch = useDispatch();

  // // 검색 키워드, api데이터
  console.log(keyword, items);

  const getItem = async () => {
    dispatch(search(valueData));
    dispatch(setKeyword(valueData));
  };

  // const BASE_URL = process.env.REACT_APP_SEARCH_API;
  // const getItem = async () => {
  //     await axios
  //         .get(`${BASE_URL}search-conditions/?name=${valueData}`)
  //         .then((res) => {
  //             const name = res.data.slice(0, 10);
  //             setSearchData(name);
  //             const object = {
  //                 data: res.data.slice(0, 10),
  //                 expireTime: new Date().getTime() + ONE_MINUTE,
  //             };
  //             localStorage.setItem(valueData, JSON.stringify(object));
  //             return JSON.stringify(object);
  //         });
  // };

  useEffect(() => {
    getItem();
  }, [valueData]);

  const connectName = (name, keyword) => {
    if (keyword === "") return false; ///  키워드가 비었으면 false
    return name === keyword.toString().toLowerCase(); // 네임 === 키워드  소문자 문자열로 리턴해준다.
  };

  //onChange 시, api 호출요청을 줄이기 위한 debounce 함수 : 딜레이시간을 정해서 쓴다.
  const debounce = (callback, delay) => {
    let timer;
    return (...arg) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...arg), delay);
    };
  };

  const onChange = async (e) => {
    const result = searchData
      .filter((item) => connectName(item, e.target.value)) // 필터를 돌려 connectName 안의 value를 타겟팅 한다.
      .sort((a, b) => a.length - b.length); //문자배열에서 각 문자열의 길이를 기준으로 오름차순 정렬
    setSearchData(result); // setSearchData 안에 data 상태를 담음
    setValueData(e.target.value); // 현재 dom을 타켓으로

    const checkCache = localStorage.getItem(e.target.value);

    // 캐싱 안에 있을 경우
    if (checkCache) {
      return checkCache;
    } else {
      // 캐싱 안에 없을 경우
      debounce(getItem(), 500);
    }
  };

  // useEffect(() => {
  //   // 만료시간 지난 캐시 삭제
  //   for (let el in localStorage) {
  //     const localStorageElem = JSON.parse(localStorage.getItem(el));
  //     if (
  //       localStorageElem?.expireTime &&
  //       localStorageElem?.expireTime <= Date.now()
  //     ) {
  //       localStorage.removeItem(el);
  //     }
  //   }
  // }, []);

  return (
    <AllBox>
      <BoxTitle>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </BoxTitle>
      <SearchAllBox>
        <SearchBox>
          <SvgBox>
            <i className="fas fa-search" />
          </SvgBox>
          <InputBox
            // ref={inputRef}
            onChange={onChange}
            value={valueData}
            // onKeyDown={onKeypress}
            placeholder="질환명을 입력해주세요"
          ></InputBox>
        </SearchBox>
        <SearchBtn>검색</SearchBtn>
      </SearchAllBox>
      {items.length > 0 ? (
        <AutoCompleteUl>
          <Recommend>추천검색어</Recommend>
          {items.map((list) => (
            <>
              <AutoCompleteLl key={list.id}>
                <Icon className="fas fa-search" />
                {list.name}
              </AutoCompleteLl>
            </>
          ))}
        </AutoCompleteUl>
      ) : null}
    </AllBox>
  );
};

const AllBox = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(202, 233, 255);
  overflow: auto;
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

const Recommend = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
`;
const AutoCompleteUl = styled.ul`
  display: flex;
  width: 58%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  margin: 0 auto;
  background-color: white;
  border-radius: 20px;
  padding: 5px;
  padding: 20px;
`;
const AutoCompleteLl = styled.li`
  margin-bottom: 22px;
  color: #333;
  font-weight: 400;
  cursor: pointer;
`;
const Icon = styled.i`
  margin-right: 10px;
`;
export default Layout;

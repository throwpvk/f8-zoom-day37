import style from "./SearchForm.module.scss";
import { useEffect, useState, useRef } from "react";
import Heading from "../../../../components/Heading";
import Wrapper from "../../../../components/Wrapper";
import SearchItem from "./components/SearchItem";
import SearchDropdown from "./components/SearchDropdown";
import React from "react";

function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({
    width: 0,
    top: 0,
    left: 0,
  });

  const wrapperRef = useRef(null);

  const data = [
    { id: 1, name: "Khóa học ReactJS", type: "Khóa học" },
    { id: 2, name: "Khóa học React Native", type: "Khóa học" },
    { id: 3, name: "Lập trình Web với NodeJS", type: "Khóa học" },
    { id: 4, name: "ReactJS nâng cao", type: "Bài viết" },
    { id: 5, name: "So sánh VueJS và ReactJS", type: "Bài viết" },
    { id: 6, name: "Bí kíp học Frontend nhanh", type: "Bài viết" },
    { id: 7, name: "Video giới thiệu về ReactJS", type: "Video" },
    { id: 8, name: "Demo ứng dụng bằng React Native", type: "Video" },
    { id: 9, name: "Học JavaScript cơ bản", type: "Khóa học" },
    { id: 10, name: "Tìm hiểu NextJS", type: "Bài viết" },
    { id: 11, name: "Video hướng dẫn Redux", type: "Video" },
  ];

  const types = ["Khóa học", "Bài viết", "Video"];

  const getFilteredDataByType = (type) => {
    return data.filter(
      (item) =>
        item.type === type &&
        item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    setInputValue(input);
    setShowResults(!!input);
  };

  const onDetailClick = () => {
    console.log("Detail clicked");
  };

  const handleClickOutside = () => {
    setShowResults(false);
  };

  useEffect(() => {
    const updatePosition = () => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        setDropdownStyle({
          width: rect.width,
          top: rect.bottom,
          left: rect.left,
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <div className={style.wrapper} ref={wrapperRef}>
      <i className="fas fa-search"></i>
      <input
        type="text"
        className={style.input}
        placeholder="Tìm kiếm..."
        onInput={handleInputChange}
        onFocus={() => setShowResults(!!inputValue)}
      />
      {inputValue && showResults && (
        <SearchDropdown
          inputValue={inputValue}
          types={types}
          getFilteredDataByType={getFilteredDataByType}
          onDetailClick={onDetailClick}
          dropdownStyle={dropdownStyle}
          handleClickOutside={handleClickOutside}
        />
      )}
    </div>
  );
}
export default SearchForm;

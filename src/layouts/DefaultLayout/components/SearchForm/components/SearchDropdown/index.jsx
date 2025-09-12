import React from "react";
import Wrapper from "../../../../../../components/Wrapper";
import Heading from "../../../../../../components/Heading";
import SearchItem from "./../SearchItem";

function SearchDropdown({
  inputValue,
  types,
  getFilteredDataByType,
  onDetailClick,
  dropdownStyle,
  handleClickOutside,
}) {
  return (
    <Wrapper
      onClickOutSide={handleClickOutside}
      style={{
        position: "fixed",
        width: `${dropdownStyle.width}px`,
        top: `${dropdownStyle.top + 10}px`,
        left: `${dropdownStyle.left}px`,
        padding: "20px",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <i className="fas fa-search"></i> Kết quả cho "{inputValue}"
      </div>
      {types.map((type) => {
        const results = getFilteredDataByType(type);
        return (
          <React.Fragment key={type}>
            <Heading
              level={3}
              onDetailClick={onDetailClick}
              wrapperStyle={{
                marginTop: "10px",
                paddingBottom: "5px",
              }}
              headingStyle={{ color: "ef7722", fontSize: "1.3rem" }}
              detailStyle={{ color: "#ef7722" }}
            >
              {type}
            </Heading>

            {results.length > 0 ? (
              results.slice(0, 3).map((item) => (
                <SearchItem
                  key={item.id}
                  image={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    item.name
                  )}&background=random&size=64`}
                >
                  {item.name}
                </SearchItem>
              ))
            ) : (
              <div style={{ padding: "10px 16px" }}>
                Không có {type} trùng với "{inputValue}"
              </div>
            )}
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
}

export default SearchDropdown;

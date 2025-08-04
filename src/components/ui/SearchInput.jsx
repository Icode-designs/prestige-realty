import { useFetchListings, useFetchNeighborhoods } from "@/hooks/useFetch";
import { SearchInputBox } from "@/styles/Ui.styles";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = ({ placeHolder, page }) => {
  const [searchInput, setSearchInput] = useState("");
  const { listingsData } = useFetchListings();
  const { neighborhoodsData } = useFetchNeighborhoods();

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const listingNames = Array.isArray(listingsData)
    ? listingsData.map((item) => item.name)
    : [];
  const neighborhoodNames = Array.isArray(neighborhoodsData)
    ? neighborhoodsData.map((item) => item.name)
    : [];
  const allNames = [...listingNames, ...neighborhoodNames];

  const searchResults =
    page === "home"
      ? allNames.filter((name) =>
          name.toLowerCase().includes(searchInput.toLowerCase())
        )
      : page === "neighborhoodspage"
      ? neighborhoodNames.filter((name) =>
          name.toLowerCase().includes(searchInput.toLowerCase())
        )
      : page === "listingspage"
      ? listingNames.filter((name) =>
          name.toLowerCase().includes(searchInput.toLowerCase())
        )
      : [];

  return (
    <SearchInputBox>
      <input
        type="text"
        placeholder={placeHolder}
        onChange={handleChange}
        value={searchInput}
      />
      <div className="icon">
        <IoSearchOutline size={24} />
      </div>
      {searchInput && (
        <ul>
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((result) => (
              <li key={result}>
                <p>{result}</p>
              </li>
            ))
          ) : (
            <li>
              <p>no match found</p>
            </li>
          )}
        </ul>
      )}
    </SearchInputBox>
  );
};

export default SearchInput;

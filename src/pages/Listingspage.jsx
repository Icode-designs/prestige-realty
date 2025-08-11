import FilterContainer from "@/components/FilterContainer";
import CardBox from "@/components/ui/CardBox";
import SearchInput from "@/components/ui/SearchInput";
import { useFetchListings } from "@/hooks/useFetch";
import { Listingsbox, ListingsPageWrapper } from "@/styles/ListingsPage.styles";
import {
  ErrorBox,
  FlexBox,
  GridBox,
  Heading2,
  LoaderBox,
  MainWrapper,
  SearchInputBox,
  SectionWrapper,
} from "@/styles/Ui.styles";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";
const Listingspage = () => {
  const [filterParameters, setFilterParameters] = useState({
    bedrooms: "",
    maximumPrice: "",
    searchEntry: "",
  });
  // Fetch listings
  const { listingsData, error, loading } = useFetchListings();

  function handleChange(e) {
    setFilterParameters((prevParameters) => ({
      ...prevParameters,
      searchEntry: e.target.value,
    }));
  }

  const displayListings = filterParameters.searchEntry.toLowerCase()
    ? listingsData.filter(
        (lD) =>
          lD.name.toLowerCase().includes(filterParameters.searchEntry) ||
          lD.town.toLowerCase().includes(filterParameters.searchEntry) ||
          lD.state.toLowerCase().includes(filterParameters.searchEntry)
      )
    : listingsData;

  return (
    <MainWrapper>
      <SectionWrapper>
        <FlexBox>
          <SearchInputBox $bg="#d3d3d3">
            <input
              type="text"
              placeholder="search by location"
              value={filterParameters.searchEntry}
              onChange={handleChange}
            />
            <div className="icon">
              <IoSearchOutline size={24} />
            </div>
          </SearchInputBox>
          <button>
            <FaFilter size={24} color="var(--col-30)" />
          </button>
        </FlexBox>

        <GridBox>
          {loading && <LoaderBox />}
          {error && <ErrorBox>error loading listings</ErrorBox>}
          {!loading &&
            !error &&
            displayListings.map((lD) => {
              const { id, name, listingsImages, state, town, lga, price } = lD;
              return (
                <CardBox
                  key={id}
                  images={listingsImages.url}
                  heading={name}
                  price={price}
                  paragraph={town + " " + lga + " " + state}
                />
              );
            })}
        </GridBox>
      </SectionWrapper>
    </MainWrapper>
  );
};

export default Listingspage;

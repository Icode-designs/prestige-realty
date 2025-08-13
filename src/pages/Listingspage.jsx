import CardBox from "@/components/ui/CardBox";
import { useFetchListings } from "@/hooks/useFetch";
import {
  ErrorBox,
  FilterDialog,
  FlexBox,
  GridBox,
  Heading2,
  LoaderBox,
  MainWrapper,
  SearchInputBox,
  SectionWrapper,
} from "@/styles/Ui.styles";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputFeild";
import { Form, useActionData } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import FilterDialogContainer from "@/components/FilterDialogContainer";

const Listingspage = () => {
  const [filterParameters, setFilterParameters] = useState({
    bedrooms: "",
    maximumPrice: "",
    state: "",
    size: "",
    parks: "",
    searchEntry: "",
  });

  const { listingsData, error, loading } = useFetchListings();
  const filterDialogRef = useRef();

  let {
    maxPrice,
    state: lState,
    size: lSize,
    beds,
    parks: lParks,
  } = useActionData() || {};

  // Sync filter params with action data when it changes
  useEffect(() => {
    if (maxPrice || beds || lState || lSize || lParks) {
      setFilterParameters((prevParameters) => ({
        ...prevParameters,
        maximumPrice: maxPrice || "",
        bedrooms: beds || "",
        parks: lParks || "",
        size: lSize || "",
        state: lState || "",
      }));
      filterDialogRef.current.close(); // close the dialog after updating
    }
  }, [maxPrice, beds, lState, lSize, lParks]);

  //set search input
  function handleChange(e) {
    setFilterParameters((prevParameters) => ({
      ...prevParameters,
      searchEntry: e.target.value,
    }));
  }

  //set listings to be displayed based on filter state
  const displayListings = useMemo(() => {
    if (!listingsData) return [];
    let results = [...listingsData];

    // Search filter
    if (filterParameters.searchEntry.trim()) {
      const query = filterParameters.searchEntry.toLowerCase();
      results = results.filter(
        (lD) =>
          lD.name.toLowerCase().includes(query) ||
          lD.town.toLowerCase().includes(query) ||
          lD.state.toLowerCase().includes(query)
      );
    }

    // Other filters
    if (
      filterParameters.maximumPrice ||
      filterParameters.bedrooms ||
      filterParameters.state ||
      filterParameters.size ||
      filterParameters.parks
    ) {
      results = results.filter((lD) => {
        let match = true;
        if (filterParameters.maximumPrice)
          match = match && lD.price / 1500 <= filterParameters.maximumPrice;
        if (filterParameters.bedrooms)
          match = match && lD.bedrooms >= filterParameters.bedrooms;
        if (filterParameters.state)
          match =
            match &&
            lD.state.toLowerCase() === filterParameters.state.toLowerCase();
        if (filterParameters.size)
          match = match && lD.size <= filterParameters.size;
        if (filterParameters.parks)
          match = match && lD.parks >= filterParameters.parks;
        return match;
      });
    }

    return results;
  }, [listingsData, filterParameters]);

  //open filter dialog
  function handleDialogOpen() {
    filterDialogRef.current.open();
  }

  //reset filter dialog
  function handleSetToDefault() {
    setFilterParameters({
      bedrooms: "",
      maximumPrice: "",
      state: "",
      size: "",
      parks: "",
      searchEntry: "",
    });
    console.log(filterParameters);

    filterDialogRef.current.close();
  }

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
          <button onClick={handleDialogOpen}>
            <FaFilter size={24} color="var(--col-30)" />
          </button>
        </FlexBox>

        <FilterDialogContainer
          handleSetToDefault={handleSetToDefault}
          ref={filterDialogRef}
        />

        <GridBox>
          {loading && <LoaderBox />}
          {error && (
            <ErrorBox>
              Error loading listings, reload or check your internet connection.
              Please contact us if the problem persists.
            </ErrorBox>
          )}
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
          {!loading && !error && displayListings <= 0 && (
            <ErrorBox>No matching result</ErrorBox>
          )}
        </GridBox>
      </SectionWrapper>
    </MainWrapper>
  );
};

export default Listingspage;

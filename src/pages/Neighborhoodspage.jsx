import FilterDialogContainer from "@/components/FilterDialogContainer";
import CardBox from "@/components/ui/CardBox";
import { useFetchNeighborhoods } from "@/hooks/useFetch";
import {
  ErrorBox,
  FlexBox,
  GridBox,
  LoaderBox,
  MainWrapper,
  SearchInputBox,
  SectionWrapper,
} from "@/styles/Ui.styles";
import React, { useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

const Neighborhoodspage = () => {
  const { neighborhoodsData, loading, error } = useFetchNeighborhoods();
  const [filterParameters, setFilterParameters] = useState({
    searchEntry: "",
  });

  //set search input
  function handleChange(e) {
    setFilterParameters((prevParameters) => ({
      ...prevParameters,
      searchEntry: e.target.value,
    }));
  }

  if (!loading) {
    console.log(neighborhoodsData);
  }

  const displayNeighborhoods = useMemo(() => {
    if (!neighborhoodsData) {
      return [];
    }
    let results = [...neighborhoodsData];
    if (filterParameters.searchEntry) {
      const query = filterParameters.searchEntry.toLowerCase();
      results = results.filter(
        (nD) =>
          nD.name.toLowerCase().includes(query) ||
          nD.town.toLowerCase().includes(query)
      );
    }
    return results;
  }, [filterParameters, neighborhoodsData]);
  console.log(displayNeighborhoods);
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

        {/* <FilterDialogContainer
            handleSetToDefault={handleSetToDefault}
            ref={filterDialogRef}
          /> */}

        <GridBox>
          {loading && <LoaderBox />}
          {error && (
            <ErrorBox>
              Error loading Neighborhoods, reload or check your internet
              connection. Please contact us if the problem persists.
            </ErrorBox>
          )}
          {!loading &&
            !error &&
            displayNeighborhoods.map((lD) => {
              const { id, name, neighborhoodImagesTable, town, lga } = lD;
              return (
                <CardBox
                  key={id}
                  images={neighborhoodImagesTable.url}
                  heading={name}
                  paragraph={town + " " + lga}
                />
              );
            })}
          {!loading && !error && displayNeighborhoods <= 0 && (
            <ErrorBox>No matching result</ErrorBox>
          )}
        </GridBox>
      </SectionWrapper>
    </MainWrapper>
  );
};

export default Neighborhoodspage;

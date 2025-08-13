import { FilterDialog, FlexBox, GridBox, Heading2 } from "@/styles/Ui.styles";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { Form } from "react-router-dom";
import InputField from "./ui/InputFeild";
import { Button } from "@mui/material";

const FilterDialogContainer = forwardRef((props, ref) => {
  const filterDialog = useRef();
  function handleDialogClose() {
    filterDialog.current.close();
  }
  useImperativeHandle(ref, () => ({
    open: () => filterDialog.current.showModal(),
    close: () => filterDialog.current.close(),
  }));

  return (
    <FilterDialog ref={filterDialog}>
      <FlexBox $variant="spaced">
        <Heading2>Filter</Heading2>
        <button onClick={handleDialogClose}>
          <IoMdClose size={32} color="var(--col-10)" />
        </button>
      </FlexBox>
      <Form method="post">
        <GridBox>
          <InputField
            type="number"
            name="maxPrice"
            id="maxPrice"
            placeHolder="max price in usd"
            label="max price"
          />
          <InputField
            type="number"
            name="beds"
            id="beds"
            placeHolder="number of rooms"
            label="no. beds"
          />
          <InputField
            type="text"
            name="state"
            id="state"
            placeHolder="state"
            label="state"
          />
          <InputField
            type="number"
            name="size"
            id="size"
            placeHolder="property size"
            label="max property size"
          />
          <InputField
            type="number"
            name="parks"
            id="parks"
            placeHolder="number of cars"
            label="no. of cars"
          />
        </GridBox>
        <FlexBox $variant="spaced">
          <Button type="reset" onClick={props.handleSetToDefault}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </FlexBox>
      </Form>
    </FilterDialog>
  );
});

export default FilterDialogContainer;

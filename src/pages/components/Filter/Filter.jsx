import React from "react";
import Select from "react-select";
import { inter } from "@/styles/fonts";
import { customStyles, StyledLabel } from "./styles";

const resourceOptions = [
  { value: "all", label: "All" },
  { value: "mana", label: "Mana" },
  { value: "energy", label: "Energy" },
  { value: "rage", label: "Rage" },
];

const roleOptions = [
  { value: "all", label: "All" },
  { value: "mage", label: "Mage" },
  { value: "marksman", label: "Marksman" },
  { value: "tank", label: "Tank" },
];

const Filter = ({ type }) => {
  const isResourceType = type === "Resource";

  return (
    <form className={inter.className}>
      <label htmlFor={`${type}-options`}>
        <StyledLabel>{type}</StyledLabel>
      </label>
      <Select
        options={isResourceType ? resourceOptions : roleOptions}
        placeholder="All"
        name={`${type}-options`}
        styles={customStyles}
      />
    </form>
  );
};

export default Filter;

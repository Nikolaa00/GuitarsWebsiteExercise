import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

import FilterIcon from "../../assets/SVG/filter.svg";
import SearchIcon from "../../assets/SVG/search.svg";
import DownIcon from "../../assets/SVG/down.svg";

import FilterIconOrange from "../../assets/SVG/filter-orange.svg";
import SearchIconOrange from "../../assets/SVG/search-orange.svg";
import DownIconOrange from "../../assets/SVG/down-orange.svg";

// Styled components
const FilterSearchWrapper = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
  width: 836px;
`;

const StyledDropdown = styled(Dropdown)`
  .dropdown-toggle {
    display: inline-flex;
    padding: 16px;
    align-items: center;
    gap: 7px;
    width: 334px;
    height: 74px;
    border-radius: 4px;
    border: 1px solid ${({ $isOrange }) => ($isOrange ? "#ff6c33" : "#d0d0d0")} !important;
    background: #fff;

    color: ${({ $isOrange }) => ($isOrange ? "#ff6c33" : " #b8b8c0")} !important;
    text-align: center;
    font-family: "Circular Std", sans-serif;
    font-size: 28px;
    font-weight: 450;
    line-height: 42px;
  }

  .dropdown-toggle::after {
    display: none !important;
  }

  .dropdown-menu {
    min-width: 100%;
    border-radius: 4px;
    padding: 0;
  }

  .dropdown-item {
    color:  #9292a3 !important;
    font-family: "Circular Std", sans-serif;
    font-size: 26.624px;
    font-weight: 450;
    line-height: 41.838px;
    border-radius: 4px;

    &:hover,
    &:focus,
    &:active,
    &.show {
      background-color: #fff2ed !important;
      color: #ff5a1f !important;
      border: 1px solid #d0d0d0;
      margin-top: 3px;
    }
  }
`;

const Icon = styled.img`
  width: 31.5px;
  height: 31.5px;
  flex-shrink: 0;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  width: 485px;
  height: 74px;
  padding: 16px;
  border: 1px solid ${({ $isActive }) => ($isActive ? "#ff5a1f" : "#d9d9d9")};
  border-radius: 4px;
  cursor: pointer;

  font-family: "Circular Std", sans-serif;
  font-size: 28px;
  font-weight: 450;
  line-height: 42px;

  ${Icon} {
    margin-right: 16px;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: inherit;
    font-family: inherit;
    text-align: center;
    color: #b8b8c0;
    cursor: pointer;

    &::placeholder {
      color: ${({ $isActive }) => ($isActive ? "#ff5a1f" : "#b8b8c0")};
      transition: color 0.3s ease;
    }

    &:focus {
      cursor: text;
    }
  }
`;

const WrapperForToggleText = styled.div`
  width: 225px;
  height: 42px;
`;

const FilterAndSearchComponent = ({ onFilterChange, onSearchChange }) => {
  const [selectedType, setSelectedType] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [dropdownActive, setDropdownActive] = useState(false);
  const [dropdownItemHover, setDropdownItemHover] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchHover, setSearchHover] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Handle clicks outside to deactivate
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (isOpen) => {
    setDropdownActive(isOpen);
  };

  const handleDropdownMouseEnter = () => setDropdownHover(true);
  const handleDropdownMouseLeave = () => setDropdownHover(false);

  const handleContainerClick = (e) => {
    e.stopPropagation();
    setSearchActive(true);
    if (inputRef.current) inputRef.current.focus();
  };

  const handleContainerMouseEnter = () => setSearchHover(true);
  const handleContainerMouseLeave = () => setSearchHover(false);

  const handleInputFocus = () => setSearchActive(true);

  const handleSelect = (type) => {
    setSelectedType(type);
    onFilterChange(type);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  const isDropdownIconOrange = dropdownActive || dropdownItemHover || dropdownHover;
  const isSearchIconOrange = searchActive || searchHover;

  return (
    <FilterSearchWrapper>
      <StyledDropdown
        $isOrange={isDropdownIconOrange}
        onSelect={handleSelect}
        onToggle={handleDropdownToggle}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        <Dropdown.Toggle variant="light" id="dropdown-custom-components">
          <Icon src={isDropdownIconOrange ? FilterIconOrange : FilterIcon} alt="filter" />
          <WrapperForToggleText>{selectedType || "Filter by type"}</WrapperForToggleText>
          <Icon src={isDropdownIconOrange ? DownIconOrange : DownIcon} alt="down" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {["Bass", "Acoustic", "Electric"].map((type) => (
            <Dropdown.Item
              key={type}
              eventKey={type}
              onMouseEnter={() => setDropdownItemHover(true)}
              onMouseLeave={() => setDropdownItemHover(false)}
            >
              {type}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </StyledDropdown>

      <SearchInput
        ref={searchRef}
        $isActive={searchActive || searchHover}
        onClick={handleContainerClick}
        onMouseEnter={handleContainerMouseEnter}
        onMouseLeave={handleContainerMouseLeave}
      >
        <Icon src={isSearchIconOrange ? SearchIconOrange : SearchIcon} alt="search" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search by name"
          value={searchValue}
          onChange={handleSearch}
          onFocus={handleInputFocus}
        />
      </SearchInput>
    </FilterSearchWrapper>
  );
};

export default FilterAndSearchComponent;

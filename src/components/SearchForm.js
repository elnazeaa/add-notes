import React from "react";
import styled from "styled-components";

const SearchForm = ({
  listName,
  handleGetInputValue,
  handleSubmitForm,
  edit,
}) => {
  return (
    <Wrapper className="searchContainer" onSubmit={handleSubmitForm}>
      <p className="searchTitle">Go ahead, Add Your Lists</p>
      <div className="form-controls">
        <input
          type="text"
          className="searchInput"
          placeholder="e.g. eggs"
          value={listName}
          onChange={handleGetInputValue}
        />
        <button type="submit" className="submitBtn">
          {edit ? "Edit" : "Submit"}
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`

    .searchTitle {
      font-size: 22px;
      font-weight: 900;
      text-align: center;
      color: #496a0f;
    }

    .form-controls{
        position:relative;
       
    }


    .submitBtn{
    position: absolute;
    right: 0px;
    border: none;
    top: 50%;
    transform: translate(-2%,-50%);
    background: #496a0f;
    width: 85px;
    height: 41px;
    border-radius: 50px 50px 50px 50px;
    font-size: 17px;
    color: #fff;
    cursor:pointer;
    }

    .searchInput{
      width: 100%;
      padding: 12px 24px;

      background-color: transparent;
      transition: transform 250ms ease-in-out;
      font-size: 14px;
      line-height: 18px;

      color: #575756;
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: 18px 18px;
      background-position: 95% center;
      border-radius: 50px;
      border: 1px solid #575756;
      transition: all 250ms ease-in-out;
      backface-visibility: hidden;
      transform-style: preserve-3d;

      &::placeholder {
        color: color(#575756 a(0.8));
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }
      &:hover,
      &:focus {
        padding: 12px 0;
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid #575756;
        border-radius: 0;
        background-position: 100% center;
      }
    }
  }
`;

export default SearchForm;

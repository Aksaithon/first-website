import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const error = () => {
  return (
    <Wrapper>
      <img className="img" src="\error.svg" alt="error" />
      <NavLink to={"/"}>
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .img {
    width: 40%;
  }
  .btn {
    margin-top: 3rem;
  }
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default error;

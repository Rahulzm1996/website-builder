import Box from "@mui/material/Box";
import styled from "styled-components";

export const AddNewRowPlaceholderStyles = styled(Box)<{
  variant?: "row" | "element";
}>`
  display: block;
  /* max-width: 1200px; */
  /* margin: 0 auto; */
  width: 100%;
  height: fit-content;
  border-radius: 4px;
  background: ${({ variant }) =>
    variant === "element"
      ? "rgba(255, 116, 2, 0.1)"
      : "rgba(24, 139, 246, 0.1)"};
  border: 1px solid rgba(24, 139, 246, 0.2);
  text-align: center;
  padding: 7px;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;

  .btn {
    font-family: Roboto, system, -apple-system, BlinkMacSystemFont,
      ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: #fff;

    padding: 11px 20px;
    transition: all 0.2s ease-in-out 0s;
    min-width: 85px;
    border-radius: 0.3125rem;
    border: none;
  }

  .btn-slim {
    padding: 5px 10px;
    height: 25px;
    font-size: 0.625rem;
    text-transform: uppercase;
    font-weight: 500;
    min-width: 150px;
  }

  .btn-light5 {
    background: #fff;
    border: none !important;
    color: #188bf6;
    font-weight: bold;
  }

  .btn-light6 {
    background: #fff;
    border: none !important;
    color: #ff7402;
    font-weight: bold;
  }

  &:hover {
    background: ${({ variant }) =>
      variant === "element"
        ? "rgba(255, 116, 2, 0.2)"
        : "rgba(24, 139, 246, 0.2)"};
    .btn {
      color: #fff;
      background: ${({ variant }) =>
        variant === "element" ? "#ff7402" : "#188bf6"};
    }
  }
`;

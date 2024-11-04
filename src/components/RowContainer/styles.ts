import { Box, Grid } from "@mui/material";
import styled from "styled-components";

export const StyledRowContainer = styled(Box)`
  min-height: 104px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  gap: 16px;
  box-sizing: border-box;
  padding: 16px;
  /* max-width: 1200px;
  margin: 0 auto; */
  transition: all 0.2s ease-in-out 0s;
  border: 2px solid transparent;
  position: relative;
  /* padding: 16px; */

  .rowCreatorActions {
    opacity: 0;
    /* transition: all 0.2s ease-in-out 0s; */

    .moveActions {
      display: flex;
      flex-direction: row;
      position: absolute;
      top: -25px;
      left: -2px;
      z-index: 2;
    }
    .moreActions {
      display: flex;
      flex-direction: row;
      position: absolute;
      top: -25px;
      right: -2px;
      z-index: 3;
    }
  }

  &:hover {
    /* box-sizing: border-box; */
    /* outline: 2px solid #188bf6; */
    border: 2px solid #188bf6;
    .rowCreatorActions {
      opacity: 1;
      /* transition: all 0.2s ease-in-out 0s; */
    }
    .addNewRow {
      opacity: 1;
      /* transition: all 0.2s ease-in-out 0s; */
    }
  }

  /* &.active:hover {
    border: 2px solid #188bf6;
    .rowCreatorActions {
      opacity: 1;
      transition: all 0.2s ease-in-out 0s;
    }
    .addNewRow {
      opacity: 1;
      transition: all 0.2s ease-in-out 0s;
    }
  } */

  .iconWrapper {
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    background-color: #188bf6;
    /* transition: all 0.2s ease-in-out 0s; */
    cursor: pointer;

    &:hover {
      background: #097eeb;
    }
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    color: #fff;
    /* transition: all 0.2s ease-in-out 0s; */
    font-size: 0.75rem;
  }

  .addNewRow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #188bf6;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    /* transition: all 0.2s ease-in-out 0s; */
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: -12px;
    z-index: 3;
    opacity: 0;

    :hover {
      opacity: 1;
    }

    .iconWrapper {
      border-radius: 50%;
    }
  }

  .column {
    width: 100%;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    padding: 25px;
    /* border-right: 2px solid transparent; */
    flex: 1 0 0;

    &:hover {
      border-color: #188bf6;
    }
  }

  &:hover {
    .column {
      border-color: #188bf6;
    }

    .column:last-child {
      border-color: transparent;
    }
  }
`;

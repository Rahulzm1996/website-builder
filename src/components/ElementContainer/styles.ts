import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledElementContainer = styled(Box)`
  min-height: 104px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1 1 250px;
  padding: 8px;
  transition: border 0.2s ease-in-out 0s;
  position: relative;
  border: 2px solid transparent;

  .elementCreatorActions {
    opacity: 0;

    .moreElementActions {
      display: flex;
      flex-direction: row;
      position: absolute;
      top: -25px;
      right: -2px;
      z-index: 4;

      .iconWrapper {
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        background-color: #ff7402;
        cursor: pointer;

        &:hover {
          background: #e86800;
        }
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        color: #fff;
        font-size: 0.75rem;
      }
    }
  }

  &:hover {
    border: 2px solid #ff7402;
    .elementCreatorActions {
      opacity: 1;
    }
    .addNewElement {
      opacity: 1;
    }
  }

  .addNewElement {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #ff7402;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s ease-in-out 0s;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: -12px;
    z-index: 4;
    opacity: 0;

    .iconWrapper {
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      background-color: #ff7402;
      transition: all 0.2s ease-in-out 0s;
      cursor: pointer;

      &:hover {
        background: #e86800;
      }
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16px;
      height: 16px;
      color: #fff;
      font-size: 0.75rem;
    }

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
    border-right: 2px solid transparent;
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

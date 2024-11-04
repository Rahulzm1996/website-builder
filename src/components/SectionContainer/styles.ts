import styled from "styled-components";

export const StyledSectionContainer = styled("section")`
  margin: 12px;
  padding: 30px;
  border: 2px solid transparent;
  position: relative;
  transition: all 0.2s ease-in-out 0s;

  .creatorActions {
    opacity: 0;
    transition: all 0.2s ease-in-out 0s;

    .moveActions {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
    }
    .moreActions {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
    }
  }

  &:hover {
    border: 2px solid #37ca37;
    .creatorActions {
      opacity: 1;
    }
    .AddNewSection {
      opacity: 1;
    }
  }

  .iconWrapper {
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    background-color: #37ca37;
    transition: all 0.2s ease-in-out 0s;
    cursor: pointer;

    &:hover {
      background-color: #30b730;
    }
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    color: #fff;
    transition: all 0.2s ease-in-out 0s;
    font-size: 0.75rem;
  }

  .AddNewSection {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #37ca37;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s ease-in-out 0s;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: -15px;
    z-index: 2;
    opacity: 0;

    :hover {
      opacity: 1;
    }

    .iconWrapper {
      border-radius: 50%;
    }
  }
`;

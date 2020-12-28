import React from "react";
import SVGWrapper from "components/elements/SVG";
import styled, { ThemeProps, withTheme } from "styled-components";
import { ITheme } from "helpers/theme";

interface IPauseButton {
  width?: string;
  height?: string;
  bg?: string;
  viewBox?: string;
  onClick?: any;
}

const HoverStyles = styled.div`
  div:first-child {
    :hover {
      opacity: 0.8;
    }
  }
`;

const PauseButton = ({
  theme,
  width = "6rem",
  height = "6rem",
  bg = theme.colors.orange,
  viewBox = "0 0 100 100",
  onClick,
}: IPauseButton & ThemeProps<ITheme>) => {
  return (
    <HoverStyles>
      <SVGWrapper
        width={width}
        height={height}
        viewBox={viewBox}
        cursor={"pointer"}
        onClick={onClick}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM41 35H48V65H41V35ZM60 35H53V65H60V35Z"
          fill={bg}
        />
      </SVGWrapper>
    </HoverStyles>
  );
};

export default withTheme(PauseButton);
